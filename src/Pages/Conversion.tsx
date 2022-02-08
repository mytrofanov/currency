import React from 'react';
// @ts-ignore
import s from './styles/Conversion.module.css'
import Button from '@mui/material/Button';
import CustomizedSelects from '../Components/CurrencyInput';
import Typography from '@mui/material/Typography';
import {ConversionPropsType} from "../Types/Types";



const Conversion: React.FC<ConversionPropsType> = ({rates, getRates, symbols,
                                                       setSelectedCurrency,selectedCurrency}) => {
    console.log('selectedCurrency:', selectedCurrency)
    let currencyName = Object.entries(symbols)
    let arrayOfSymbols = [] as Array<string>
    currencyName.forEach(item=>{
        arrayOfSymbols.push(item[0])
    })

    return (
        <div className={s.conversionPage}>

            <div className={s.exchangeBox}>
                <div className={s.sumCurrencyInput}>
                    <Typography variant="h5">
                        Select currency to exchange
                    </Typography>

                    <CustomizedSelects arrayOfSymbols={arrayOfSymbols} setSelectedCurrency={setSelectedCurrency}/>
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


                </div>
            </div>


        </div>
    );
};

export default Conversion;