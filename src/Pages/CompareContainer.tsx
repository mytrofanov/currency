import React from 'react';
import Compare from './Compare';
import {compareMapStateToPropsPropsType, ComparePropsType} from "../Types/Types";
import {AppStateType} from "../Redux/reduxStore";
import {
    getHistoricalRates,
    getHistoricalRatesDay2,
    getSelectedAmount,
    getSelectedCurrency,
    getSymbols
} from "../Redux/usersSelectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    requestHistorical, requestHistoricalDay2,
    setSelectedAmount,
    setSelectedCurrency,
} from "../Redux/currency-reducer";

class CompareContainer extends React.Component <ComparePropsType> {


    render() {
        return <div>
            <Compare historicalRates={this.props.historicalRates}
                     historicalRatesDay2={this.props.historicalRatesDay2}
                     symbols={this.props.symbols}
                     selectedCurrency={this.props.selectedCurrency}
                     selectedAmount={this.props.selectedAmount}
                     getHistoricalRates={this.props.getHistoricalRates}
                     getHistoricalRatesDay2={this.props.getHistoricalRatesDay2}
                     setSelectedCurrency={this.props.setSelectedCurrency}
                     setSelectedAmount={this.props.setSelectedAmount}
            />
        </div>
    }
}

let compareMapStateToProps = (state: AppStateType): compareMapStateToPropsPropsType => {
    return {
        historicalRates: getHistoricalRates(state),
        historicalRatesDay2: getHistoricalRatesDay2(state),
        symbols: getSymbols(state),
        selectedCurrency: getSelectedCurrency(state),
        selectedAmount: getSelectedAmount(state),
    } as compareMapStateToPropsPropsType
}

export default compose(
    connect(compareMapStateToProps,
        {
            getHistoricalRates: requestHistorical,
            getHistoricalRatesDay2: requestHistoricalDay2,
            setSelectedCurrency: setSelectedCurrency,
            setSelectedAmount: setSelectedAmount,
        }),
)(CompareContainer)
