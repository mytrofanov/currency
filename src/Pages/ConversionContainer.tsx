import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {requestLatest, setSelectedCurrency} from "../Redux/currency-reducer";
import {AppStateType} from "../Redux/reduxStore";
import {getRates, getSelectedCurrency, getSymbols} from "../Redux/usersSelectors";
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
                />
            </div>
    }
}

let currencyMapStateToProps = (state: AppStateType):currencyMapStateToPropsType => {
    return {
        rates: getRates(state),
        symbols: getSymbols(state),
        selectedCurrency: getSelectedCurrency(state)
    } as currencyMapStateToPropsType
}

export default compose(
    connect(currencyMapStateToProps,
        {
            getRates:requestLatest,
            setSelectedCurrency: setSelectedCurrency
        }),
    )(ConversionContainer)