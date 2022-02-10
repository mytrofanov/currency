import React, {useState} from 'react';
import {ComparePropsType} from "../Types/Types";
// @ts-ignore
import s from './styles/Compare.module.css'
// @ts-ignore
import o from "./styles/Conversion.module.css";
import BasicDatePicker from "../Components/DatePicker";
import CustomizedSelects from "../Components/CurrencyInput";
import Button from "@mui/material/Button";
import SecondDatePicker from "../Components/DatePicker2";

const Compare: React.FC<ComparePropsType> = ({
                                                 historicalRates,
                                                 selectedAmount, setSelectedAmount,
                                                 selectedCurrency, setSelectedCurrency,
                                                 getHistoricalRates, getHistoricalRatesDay2,
                                                 symbols, historicalRatesDay2
                                             }) => {
    let [date, setDate] = useState('')
    let [date2, setDate2] = useState('')
    let uuid = require("uuid");

    function getHistoryDay1() {
        if (date.length > 1) {
            getHistoricalRates(date, selectedCurrency, selectedAmount)
        }
    }

    function getHistoryDay2() {
        if (date2.length > 1) {
            getHistoricalRatesDay2(date2, selectedCurrency, selectedAmount)
        }
    }

    let cRates = Object.entries(historicalRates)
    const historicRatesToShowDay1: Array<JSX.Element> = []
    cRates.forEach((item, index) => historicRatesToShowDay1.push(
        <div className={o.conversionResult} key={index + item[0]}>
            <div className={o.currencyBlock} key={item[0] + index}>
                {item[0]}
            </div>
            <div className={o.sumBlock} key={item[0] + index + item[1]}>
                Sum: {item[1]}
            </div>
        </div>
    ))
    let historyDay2 = Object.entries(historicalRatesDay2)
    const historicRatesToShowDay2: Array<JSX.Element> = []

    historyDay2.forEach((item, index) => {
        let id = uuid.v4();
        historicRatesToShowDay2.push(
            <div className={o.conversionResult} key={id}>
                <div className={o.currencyBlock} key={item[0] + id}>
                    {item[0]}
                </div>
                <div className={o.sumBlock} key={item[0] + index + id}>
                    Sum: {item[1]}
                </div>
            </div>
        )
    })


    return (
        <div className={s.compareBlock}>
            <div className={s.flexBlock}>
                <div className={s.leftPart}>
                    <div className={s.calendar}>
                        <BasicDatePicker setDate={setDate}/>
                        <CustomizedSelects
                            symbols={symbols}
                            setSelectedCurrency={setSelectedCurrency}
                            setSelectedAmount={setSelectedAmount}
                            selectedAmount={selectedAmount}
                        />
                        <Button variant="outlined" size={"small"}
                                onClick={() => {
                                    getHistoryDay1()
                                }}>Get Historical Rates</Button>
                    </div>
                    <div className={s.leftTable}>
                        Historical rates on day: {date}
                        {historicRatesToShowDay1}
                    </div>

                </div>
                <div className={s.rightBlock}>
                    <div className={s.rightBlockTable}>
                        Historical rates on day: {date2}
                        {historicRatesToShowDay2}
                    </div>
                    <div className={s.rightBlockCalendar}>
                        <SecondDatePicker setDate2={setDate2}/>
                        <div>
                            <Button variant="outlined" size={"small"}
                                    onClick={() => {
                                        getHistoryDay2()
                                    }}>Get Historical Rates</Button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Compare;