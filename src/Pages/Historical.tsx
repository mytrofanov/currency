import React, {useEffect, useState} from 'react';
// @ts-ignore
import s from './styles/Historical.module.css'
import BasicDatePicker from "../Components/DatePicker";
import CustomizedSelects from "../Components/CurrencyInput";
import {HystoricalPropsType} from "../Types/Types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button";


const Historical: React.FC<HystoricalPropsType> = ({
                                                       getHistoricalRates, symbols, setSelectedCurrency,
                                                       selectedCurrency, setSelectedAmount, selectedAmount
                                                   }) => {
    let [date,setDate]=useState('')



    return (
        <div className={s.historicalPage}>
            <div className={s.calendarBox}>

                <div className={s.datePicker}>
                    <BasicDatePicker/>

                    <CustomizedSelects
                        symbols={symbols}
                        setSelectedCurrency={setSelectedCurrency}
                        setSelectedAmount={setSelectedAmount}
                        selectedAmount={selectedAmount}
                    />
                    <Button variant="outlined"
                            onClick={() => {

                            }}>Get Historical Rates</Button>
                </div>
                <div className={s.historicalRates}>
                    rates
                </div>
            </div>

        </div>
    );
};

export default Historical;