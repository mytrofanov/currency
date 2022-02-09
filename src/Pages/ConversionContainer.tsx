import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    requestLatest,
    setSelectedAmount,
    setSelectedCurrency,
    setSelectedTargetCurrency
} from "../Redux/currency-reducer";
import {AppStateType} from "../Redux/reduxStore";
import {
    getRates,
    getSelectedAmount,
    getSelectedCurrency,
    getSelectedTargetCurrency,
    getSymbols
} from "../Redux/usersSelectors";
import Conversion from "./Conversion";
import {currencyMapDispatchToPropsType, currencyMapStateToPropsType} from "../Types/Types";

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
    } as currencyMapStateToPropsType
}

export default compose(
    connect(currencyMapStateToProps,
        {
            getRates:requestLatest,
            setSelectedCurrency: setSelectedCurrency,
            setSelectedAmount:setSelectedAmount,
            setSelectedTargetCurrency:setSelectedTargetCurrency
        }),
    )(ConversionContainer)