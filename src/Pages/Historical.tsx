import React, {useEffect} from 'react';
// @ts-ignore
import s from './styles/Historical.module.css'
import BasicDatePicker from "../Components/DatePicker";
import CustomizedSelects from "../Components/CurrencyInput";
import {HystoricalPropsType} from "../Types/Types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";


const Historical: React.FC<HystoricalPropsType> = ({
                                                       getHistoricalRates, symbols, setSelectedCurrency,
                                                       selectedCurrency, setSelectedAmount, selectedAmount
                                                   }) => {
    useEffect(() => {
        console.log('Historical props.symbols', arrayOfSymbols)
    }, [symbols])
// =========create Array of currency names
    let currencyName = Object.entries(symbols)
    let arrayOfSymbols = [] as Array<string>
    currencyName.forEach(item => {
        arrayOfSymbols.push(item[0])
    })

    return (
        <div className={s.historicalPage}>
            <div className={s.calendarBox}>

                <div className={s.datePicker}>
                    <BasicDatePicker/>

                    <CustomizedSelects
                        arrayOfSymbols={arrayOfSymbols}
                        setSelectedCurrency={setSelectedCurrency}
                        setSelectedAmount={setSelectedAmount}
                        selectedAmount={selectedAmount}
                    />
                </div>
                <div className={s.historicalRates}>
                    rates
                </div>
            </div>

        </div>
    );
};

export default Historical;