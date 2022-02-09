import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    requestConvert,
    requestLatest, setConversionHistory,
    setSelectedAmount,
    setSelectedCurrency,
    setSelectedTargetCurrency
} from "../Redux/currency-reducer";
import {AppStateType} from "../Redux/reduxStore";
import {
    getConversionHistory,
    getConversionRate,
    getConversionResult,
    getRates,
    getSelectedAmount,
    getSelectedCurrency,
    getSelectedTargetCurrency,
    getSymbols
} from "../Redux/usersSelectors";
import Conversion from "./Conversion";
import {currencyMapDispatchToPropsType, currencyMapStateToPropsType, InfoType} from "../Types/Types";

type conversionPropsType = currencyMapStateToPropsType & currencyMapDispatchToPropsType
class ConversionContainer extends React.Component <conversionPropsType>  {


    render () {
        return <div>
                <Conversion rates={this.props.rates}
                            getRates={this.props.getRates}
                            symbols={this.props.symbols}
                            setSelectedCurrency={this.props.setSelectedCurrency}
                            selectedCurrency={this.props.selectedCurrency}
                            setSelectedAmount={this.props.setSelectedAmount}
                            selectedAmount={this.props.selectedAmount}
                            setSelectedTargetCurrency={this.props.setSelectedTargetCurrency}
                            selectedTargetCurrency={this.props.selectedTargetCurrency}
                            conversionResult={this.props.conversionResult}
                            conversionRate={this.props.conversionRate}
                            conversionHistory={this.props.conversionHistory}
                            requestConvert={this.props.requestConvert}
                            setConversionHistory={this.props.setConversionHistory}
                />
            </div>
    }
}

let currencyMapStateToProps = (state: AppStateType):currencyMapStateToPropsType => {
    return {
        rates: getRates(state),
        symbols: getSymbols(state),
        selectedCurrency: getSelectedCurrency(state),
        selectedTargetCurrency: getSelectedTargetCurrency(state),
        selectedAmount: getSelectedAmount(state),
        conversionResult: getConversionResult(state) ,
        conversionRate: getConversionRate(state) ,
        conversionHistory: getConversionHistory(state) ,
    } as currencyMapStateToPropsType
}

export default compose(
    connect(currencyMapStateToProps,
        {
            getRates:requestLatest,
            setSelectedCurrency: setSelectedCurrency,
            setSelectedAmount:setSelectedAmount,
            setSelectedTargetCurrency:setSelectedTargetCurrency,
            requestConvert:requestConvert,
            setConversionHistory:setConversionHistory
        }),
    )(ConversionContainer)