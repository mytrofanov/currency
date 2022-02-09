import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {useEffect} from "react";


export default function BasicDatePicker() {
    const [value, setValue] = React.useState<Date | null>(null);
    let date = new Date();

    if (value){
        let dateYMD = value.toLocaleDateString ("fr-CA");
        console.log (dateYMD);
    }



    // useEffect(()=>{console.log('calendar:' , value)},[value])

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
