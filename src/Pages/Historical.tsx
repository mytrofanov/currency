import React from 'react';
// @ts-ignore
import s from './styles/Historical.module.css'
import CustomDateRangePickerDay from "../Components/Calendar";

const Historical = () => {
    return (
        <div className={s.historicalPage}>
            <div className={s.calendarBox}>
                <CustomDateRangePickerDay/>
            </div>
        </div>
    );
};

export default Historical;