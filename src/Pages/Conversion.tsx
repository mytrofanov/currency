import React, {useEffect, useState} from 'react';
// @ts-ignore
import s from './styles/Conversion.module.css'
import Button from '@mui/material/Button';
import CustomizedSelects from '../Components/CurrencyInput';
import Typography from '@mui/material/Typography';
import {ConversionPropsType} from "../Types/Types";
import UnstyledTable from "../Components/Table";
import PositionedSnackbar from "../Components/SnackBar";

const Conversion:
    React.FC<ConversionPropsType> = ({
                                         rates, getRates, symbols,
                                         setSelectedCurrency, selectedCurrency, setSelectedAmount, selectedAmount,
                                         setSelectedTargetCurrency, selectedTargetCurrency, ...props
                                     }) => {

    let [showSnackBar, setShowSnackBar] = useState(false)
    let [rerender, setRerender] = useState(false)



    // =========create Array of rates (JSX block)
    let cRates = Object.entries(rates)
    const ratesToShow: Array<JSX.Element> = []
    cRates.forEach((item, index) => ratesToShow.push(
        <div className={s.conversionResult} key={index + item[0]}>
            <div className={s.currencyBlock} key={item[0] + index} onClick={() => {
                setSelectedTargetCurrency(item[0])
            }}>
                {item[0]}
            </div>
            <div className={s.sumBlock} key={item[0] + index + item[1]}>
                Sum: {item[1]}
            </div>
            <div>
                <Button variant="text" size={"small"} key={item[0]} onClick={() => {
                    setSelectedTargetCurrency(item[0])
                    setShowSnackBar(true)
                }}>
                    Choose as target</Button>
            </div>
        </div>
    ))

    useEffect(()=>{
        if (props.conversionResult>0) {
            // @ts-ignore
            props.setConversionHistory([selectedCurrency,selectedTargetCurrency, props.conversionResult])
        }
    },[props.conversionResult])

    function exchangeCurrency() {
        props.requestConvert(selectedCurrency, selectedTargetCurrency, selectedAmount).then(data=>{
            setRerender(prev=>!prev)
        })
    }



    return (
        <div className={s.conversionPage}>

            <div className={s.exchangeBox}>
                <div className={s.sumCurrencyInput}>
                    <Typography variant={"body1"}>
                        Select currency to exchange
                    </Typography>

                    <CustomizedSelects symbols={symbols}
                                       setSelectedCurrency={setSelectedCurrency}
                                       setSelectedAmount={setSelectedAmount}
                                       selectedAmount={selectedAmount}
                    />
                    <Button variant="outlined"
                            sx={{m: 2}}
                            onClick={() => {

                                exchangeCurrency()
                            }}>Exchange</Button>
                    <Button variant="outlined"
                            onClick={() => {
                                getRates(selectedCurrency, selectedAmount)
                            }}>Get All Rates</Button>
                    <div>
                        <Typography variant={"body1"}>
                            History of exchange
                        </Typography>

                            <UnstyledTable result={props.conversionResult}
                                           conversionHistory={props.conversionHistory}
                                           rerender={rerender}
                            />


                    </div>


                </div>
                <div className={s.resultBlock}>
                    <Typography component={'span'} variant="body2" gutterBottom>
                        {ratesToShow}
                    </Typography>
                </div>
            </div>
            <PositionedSnackbar showSnackBar={showSnackBar} selectedTargetCurrency={selectedTargetCurrency}/>

        </div>
    );
};

export default Conversion;