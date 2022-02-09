import React from 'react';
import Historical from './Historical';
import {AppStateType} from "../Redux/reduxStore";
import {
    HistoricalMapDispatchToPropsType, HistoricalMapStateToPropsType
} from "../Types/Types";
import {
    getSelectedAmount,
    getSelectedCurrency,
    getSymbols
} from "../Redux/usersSelectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    requestConvert, requestHistorical,
    setConversionHistory,
    setSelectedAmount,
    setSelectedCurrency,
    setSelectedTargetCurrency
} from "../Redux/currency-reducer";

type HistoricalPropsType = HistoricalMapStateToPropsType & HistoricalMapDispatchToPropsType

class HistoricalContainer extends React.Component <HistoricalPropsType> {

    render() {
        return <div>
            <Historical
                        getHistoricalRates={this.props.getHistoricalRates}
                        symbols={this.props.symbols}
                        setSelectedCurrency={this.props.setSelectedCurrency}
                        selectedCurrency={this.props.selectedCurrency}
                        setSelectedAmount={this.props.setSelectedAmount}
                        selectedAmount={this.props.selectedAmount}
            />
        </div>

    };
}

let historicalMapStateToProps = (state: AppStateType): HistoricalMapStateToPropsType => {
    return {
        symbols: getSymbols(state),
        selectedCurrency: getSelectedCurrency(state),
        selectedAmount: getSelectedAmount(state),
    }  as HistoricalMapStateToPropsType
}

export default compose(
    connect(historicalMapStateToProps,
        {
            getHistoricalRates: requestHistorical,
            setSelectedCurrency: setSelectedCurrency,
            setSelectedAmount: setSelectedAmount,
            setSelectedTargetCurrency: setSelectedTargetCurrency,
            requestConvert: requestConvert,
            setConversionHistory: setConversionHistory
        }),
)(HistoricalContainer)
