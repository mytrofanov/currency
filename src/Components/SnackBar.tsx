import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import {useEffect} from "react";

export interface State extends SnackbarOrigin {
    open: boolean;
}
type props = {
    showSnackBar: boolean
    selectedTargetCurrency: string
}

export default function PositionedSnackbar({showSnackBar, selectedTargetCurrency}:props) {
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    useEffect(()=>{

       if(showSnackBar) {
        setState({
               open: true,
               vertical: 'bottom',
               horizontal: 'center',
           })
       }
    },[showSnackBar,selectedTargetCurrency])

    const handleClick = (newState: SnackbarOrigin) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>
            <Button
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'center',
                })}
            >
                Top-Center
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'right',
                })}
            >
                Top-Right
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'right',
                })}
            >
                Bottom-Right
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'center',
                })}
            >
                Bottom-Center
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'left',
                })}
            >
                Bottom-Left
            </Button>
            <Button
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'left',
                })}
            >
                Top-Left
            </Button>
        </React.Fragment>
    );

    return (
        <div>

            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={`Selected target currency: ${selectedTargetCurrency}`}
                key={vertical + horizontal}
            />
        </div>
    );
}
