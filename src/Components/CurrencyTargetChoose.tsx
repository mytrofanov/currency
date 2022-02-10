import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import {SymbolsType} from "../Types/Types";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 14,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));
type propsType = {
    setSelectedTargetCurrency: (arg0:string)=>void
    symbols:Array<SymbolsType>
}

export default function  SelectTargetCurrency({setSelectedTargetCurrency, symbols,
                                              }:propsType) {
    const [targetCurrency, setTargetCurrency] = React.useState('');
    // =========create Array of currency names
    let currencyName = Object.entries(symbols)
    let arrayOfSymbols = [] as Array<string>
    currencyName.forEach(item => {
        arrayOfSymbols.push(item[0])
    })
    const handleChange = (event: { target: { value: string } }) => {
        setTargetCurrency(event.target.value);
        setSelectedTargetCurrency(event.target.value)
    };

    const oList:Array<JSX.Element> = []

    arrayOfSymbols.map( (item,index) =>
        oList.push(
            // @ts-ignore
            <option value={item} key={item}>{item}</option>
        )
    )


    return (
        <div>
         <FormControl sx={{ m: 1 }} variant="standard">
    <InputLabel htmlFor="demo-customized-select-native">Target</InputLabel>
        <NativeSelect
    id="demo-customized-select-native"
    value={targetCurrency}
    onChange={handleChange}
    input={<BootstrapInput />}
>
            {oList}
        </NativeSelect>
        </FormControl>

        </div>
);
}
