import React from 'react';
// @ts-ignore
import s from './styles/Historical.module.css'
import BasicDatePicker from "../Components/DatePicker";


const Historical = () => {
    return (
        <div className={s.historicalPage}>
            <div className={s.calendarBox}>
            <BasicDatePicker/>
            </div>
        </div>
    );
};

export default Historical;