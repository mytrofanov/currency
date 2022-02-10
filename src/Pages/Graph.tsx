import React, {useState} from 'react';
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement,
    LineElement, Title, Tooltip, Legend
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {GraphPropsType} from "../Types/Types";
// @ts-ignore
import s from './styles/Gpaph.module.css'
import BasicDatePicker from "../Components/DatePicker";
import CustomizedSelects from "../Components/CurrencyInput";
import Button from "@mui/material/Button";
import SecondDatePicker from "../Components/DatePicker2";
import SelectTargetCurrency from "../Components/CurrencyTargetChoose";



const Graph:React.FC<GraphPropsType> = (props) => {
    let [date, setDate] = useState('')
    let [date2, setDate2] = useState('')
    const arrayRates=Object.entries(props.periodRates)
    ChartJS.register(
        CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
    );
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Currency change in selected period',
            },
        },
    };

    const labels: Array<string> = [];
    arrayRates.forEach((item,index)=>{
        labels.push(item[0])
    })


    let data = {
        labels,
        datasets: [
            {
                label: 'Rates',
                // @ts-ignore
                data: labels.map((i,index) => arrayRates[index][1][props.selectedTargetCurrency]),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    }


    function getPeriod() {
        if(date && date2){
            props.requestPeriod(date,date2,props.selectedCurrency,props.selectedAmount)
        }

    }

    return (
        <div className={s.graphPage}>
            <div className={s.graph}>
                <Line options={options} data={data}/>
            </div>
            <div className={s.selectBlock}>
    <div className={s.calendarMenu}>
        <BasicDatePicker setDate={setDate}/>
        <SecondDatePicker setDate2={setDate2}/>
<div className={s.currencySelectors}>
    <CustomizedSelects
        symbols={props.symbols}
        setSelectedCurrency={props.setSelectedCurrency}
        setSelectedAmount={props.setSelectedAmount}
        selectedAmount={props.selectedAmount}
    />
    <SelectTargetCurrency symbols={props.symbols}
                          setSelectedTargetCurrency={props.setSelectedTargetCurrency}/>
</div>


        <Button variant="outlined"
                onClick={() => {
                    getPeriod()
                }}>Show Rates on Graph</Button>
    </div>

            </div>

        </div>
    );
};

export default Graph;