import React, {useEffect, useState} from 'react';
// @ts-ignore
import s from './styles/Historical.module.css'
import BasicDatePicker from "../Components/DatePicker";
import CustomizedSelects from "../Components/CurrencyInput";
import {HystoricalPropsType} from "../Types/Types";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// @ts-ignore
import o from './styles/Conversion.module.css'

const Historical: React.FC<HystoricalPropsType> = ({getHistoricalRates, symbols,
                                                       setSelectedCurrency, selectedCurrency,
                                                       setSelectedAmount, selectedAmount,
                                                       historicalRates
                                                   }) => {
    let [date, setDate] = useState('')


    function getHistory() {
        getHistoricalRates(date, selectedCurrency, selectedAmount)
    }

    let cRates = Object.entries(historicalRates)
    const historicRatesToShow: Array<JSX.Element> = []
    cRates.forEach((item, index) => historicRatesToShow.push(
        <div className={o.conversionResult} key={index + item[0]}>
            <div className={o.currencyBlock} key={item[0] + index}>
                {item[0]}
            </div>
            <div className={o.sumBlock} key={item[0] + index + item[1]}>
                Sum: {item[1]}
            </div>
        </div>
    ))

    return (
        <div className={s.historicalPage}>
            <div className={s.calendarBox}>

                <div className={s.datePicker}>
                    <BasicDatePicker setDate={setDate}/>

                    <CustomizedSelects
                        symbols={symbols}
                        setSelectedCurrency={setSelectedCurrency}
                        setSelectedAmount={setSelectedAmount}
                        selectedAmount={selectedAmount}
                    />
                    <Button variant="outlined"
                            onClick={() => {
                                getHistory()
                            }}>Get Historical Rates</Button>
                </div>
                <div className={s.historicalRates}>
                    <Typography component={'span'} variant="body2" gutterBottom>

                        <div className={s.historicalRatesToShow}>
                            Rates on date: {date}
                            {historicRatesToShow}
                        </div>

                    </Typography>
                </div>
            </div>

        </div>
    );
};

export default Historical;