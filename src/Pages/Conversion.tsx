import React from 'react';
// @ts-ignore
import s from './styles/Conversion.module.css'
import Button from '@mui/material/Button';
import CustomizedSelects from '../Components/CurrencyInput';
import Typography from '@mui/material/Typography';
import {ConversionPropsType} from "../Types/Types";


const Conversion:
    React.FC<ConversionPropsType> = ({ rates, getRates, symbols,
          setSelectedCurrency, selectedCurrency, setSelectedAmount,selectedAmount,
                                         setSelectedTargetCurrency,selectedTargetCurrency
                                                   }) => {


    // =========create Array of currency names
    let currencyName = Object.entries(symbols)
    let arrayOfSymbols = [] as Array<string>
    currencyName.forEach(item=>{
        arrayOfSymbols.push(item[0])
    })
    // =========create Array of rates (JSX block)
    let cRates = Object.entries(rates)
    const ratesToShow:Array<JSX.Element> = []
    cRates.forEach((item,index)=>console.log('currency',item[0], 'sum', item[1]))
    cRates.forEach((item,index)=>ratesToShow.push(
        <div className={s.conversionResult} key={index}>
            <div className={s.currencyBlock} onClick={()=>{setSelectedTargetCurrency(item[0])}}>
                {item[0]}
            </div>
            <div className={s.sumBlock}>
                Sum: {item[1]}
            </div>
        </div>
    ))

    return (
        <div className={s.conversionPage}>

            <div className={s.exchangeBox}>
                <div className={s.sumCurrencyInput}>
                    <Typography variant="h5">
                        Select currency to exchange
                    </Typography>

                    <CustomizedSelects arrayOfSymbols={arrayOfSymbols}
                                       setSelectedCurrency={setSelectedCurrency}
                                       setSelectedAmount={setSelectedAmount}
                                       selectedAmount={selectedAmount}
                    />
                    <Button variant="outlined"
                            sx={{m: 2}}
                            onClick={() => {

                            }}>Exchange</Button>
                    <Button variant="outlined"
                            onClick={() => {
                                getRates(selectedCurrency,selectedAmount )
                            }}>Get Rates</Button>
                    <div>

                        <h5>Click the name of currency to select as target currency</h5>
                        Selected Target Currency: <span className={s.selectedTarger}>{selectedTargetCurrency}</span>
                    </div>


                </div>
                    <div className={s.resultBlock}>
                        {ratesToShow}
                    </div>
            </div>


        </div>
    );
};

export default Conversion;