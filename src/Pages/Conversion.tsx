import React from 'react';
// @ts-ignore
import s from './styles/Conversion.module.css'
import Button from '@mui/material/Button';
import CustomizedSelects from '../Components/CurrencyInput';
import Typography from '@mui/material/Typography';
import {RatesType} from "../Types/Types";

type PropsType = {
    rates: Array<RatesType>
    getRates: () => void
}


const Conversion: React.FC<PropsType> = ({rates, getRates}) => {
    console.log('ConversionPage:', rates)

    return (
        <div className={s.conversionPage}>

            <div className={s.exchangeBox}>
                <div className={s.sumCurrencyInput}>
                    <Typography variant="h5">
                        Select currency to exchange
                    </Typography>

                    <CustomizedSelects/>
                    <Button variant="outlined"
                            sx={{m: 2}}
                            onClick={() => {

                            }}>Exchange</Button>
                    <Button variant="outlined"
                            onClick={() => {
                                getRates()
                            }}>Get Rates</Button>
                </div>
                <div className={s.resultBlock}>
                    ResultBlock
                    {rates.forEach((item,index)=> {
                        <div key={index}> {item} </div>
                    })}
                </div>
            </div>


        </div>
    );
};

export default Conversion;