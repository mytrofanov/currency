import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import {setSelectedTargetCurrency} from "../Redux/currency-reducer";

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
    arrayOfSymbols: Array<string>
    setSelectedCurrency:(arg0:string)=>void
    setSelectedAmount:(arg0:number)=>void
    selectedAmount:number
    selectedTargetCurrency:string
}

export default function CustomizedSelects({arrayOfSymbols,setSelectedCurrency,setSelectedAmount,
                                              selectedAmount,selectedTargetCurrency}:propsType) {
    const [currency, setCurrency] = React.useState('');
    const handleChange = (event: { target: { value: string } }) => {
        setCurrency(event.target.value);
        setSelectedCurrency(event.target.value)
    };

    const inputChange = (number: number) => {
        setSelectedAmount(number)
    };

    const oList:Array<JSX.Element> = []
    arrayOfSymbols.map( (item,index) =>
        oList.push(
            <option value={item} key={item}>{item}</option>
        )
    )
    const targetList:Array<JSX.Element> = []
    arrayOfSymbols.map( (item,index) =>
        targetList.push(
            <option value={item} key={item+index}>{item}</option>
        )
    )

    return (
        <div>
            <FormControl sx={{ m: 1 }} variant="standard">
    <InputLabel htmlFor="demo-customized-textbox">Amount</InputLabel>
        <BootstrapInput id="demo-customized-textbox" defaultValue={selectedAmount}
                        onChange={(event)=>{
                            inputChange(Number(event.target.value))}} />
        </FormControl>
                <FormControl sx={{ m: 1 }} variant="standard">
    <InputLabel htmlFor="demo-customized-select-native">From</InputLabel>
        <NativeSelect
    id="demo-customized-select-native"
    value={currency}
    onChange={handleChange}
    input={<BootstrapInput />}
>
            {oList}
        </NativeSelect>
        </FormControl>

        </div>
);
}
