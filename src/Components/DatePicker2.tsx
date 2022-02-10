import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {Dispatch, SetStateAction, useEffect} from "react";

type propsType = {
    setDate2: Dispatch<SetStateAction<string>>
}


export default function SecondDatePicker({setDate2}:propsType) {
    const [value, setValue] = React.useState<Date | null>(null);


 useEffect(()=>{
     if (value){
     let dateYMD = value.toLocaleDateString ("fr-CA");
     setDate2(dateYMD)

 }},[value])

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Choose a date"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
