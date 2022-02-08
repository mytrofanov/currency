import React, {ReactNode} from 'react';
import s from './styles/Conversion.module.css'
import Button from '@mui/material/Button';
import {requestExchange, requestLatest} from '../Redux/currency-reducer';
import CustomizedSelects from '../Components/CurrencyInput';
import Typography from '@mui/material/Typography';
import {RouteComponentProps} from '@reach/router';

type PropsType = {
    rates: {},
    getRates: () => void
}


const Conversion: React.FC<PropsType> = ({rates, getRates, children}) => {
    console.log('ConversionPage:', rates)


    return (
        <div className={s.conversionPage}>

            <div className={s.exchangeBox}>
                <div className={s.sumCurrensyInput}>
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
                    {rates}
                </div>
            </div>


        </div>
    );
};

export default Conversion;