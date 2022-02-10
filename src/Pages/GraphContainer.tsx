import React from 'react';
import Graph from './Graph';
import {
    GraphMapDispatchToPropsType,
    GraphMapStateToPropsType
} from "../Types/Types";
import {AppStateType} from "../Redux/reduxStore";
import {
    getPeriodRates,
    getSelectedAmount,
    getSelectedCurrency, getSelectedTargetCurrency,
    getSymbols
} from "../Redux/usersSelectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    requestPeriod, setSelectedAmount,
    setSelectedCurrency, setSelectedTargetCurrency
} from "../Redux/currency-reducer";

type GraphPropsType = GraphMapStateToPropsType & GraphMapDispatchToPropsType

class GraphContainer extends React.Component <GraphPropsType> {

    render() {
        return <div>
            <Graph requestPeriod={this.props.requestPeriod}
                   setSelectedCurrency={this.props.setSelectedCurrency}
                   setSelectedAmount={this.props.setSelectedAmount}
                   periodRates={this.props.periodRates}
                   symbols={this.props.symbols}
                   selectedCurrency={this.props.selectedCurrency}
                   selectedAmount={this.props.selectedAmount}
                   selectedTargetCurrency={this.props.selectedTargetCurrency}
                   setSelectedTargetCurrency={this.props.setSelectedTargetCurrency}
            />
        </div>
    }
}

let GraphMapStateToProps = (state: AppStateType): GraphMapStateToPropsType => {
    return {
        periodRates: getPeriodRates(state),
        symbols: getSymbols(state),
        selectedCurrency: getSelectedCurrency(state),
        selectedAmount: getSelectedAmount(state),
        selectedTargetCurrency:getSelectedTargetCurrency(state),
    }  as GraphMapStateToPropsType
}

export default compose(
    connect(GraphMapStateToProps,
        {
            requestPeriod: requestPeriod,
            setSelectedCurrency: setSelectedCurrency,
            setSelectedAmount: setSelectedAmount,
            setSelectedTargetCurrency:setSelectedTargetCurrency
        }),
)(GraphContainer)

