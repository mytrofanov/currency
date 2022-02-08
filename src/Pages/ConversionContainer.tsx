import React, { ReactNode } from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import { requestLatest } from "../Redux/currency-reducer";
import {AppStateType} from "../Redux/reduxStore";
import {getRates} from "../Redux/usersSelectors";
import {currensyMapDispatchToPropsType, currensyMapStateToPropsType } from "../Types/Types";
import Conversion from "./Conversion";


type container = {
    childen: any
}
type conversionPropsType = currensyMapStateToPropsType & currensyMapDispatchToPropsType &container


class ConversionContainer extends React.Component <conversionPropsType>  {

    render () {
        return <div>
                <Conversion rates={this.props.rates} getRates={this.props.getRates}/>
            </div>
    }
};

let currensyMapStateToProps = (state: AppStateType):currensyMapStateToPropsType => {
    return {
        rates: getRates(state)
    } as currensyMapStateToPropsType
}


export default compose(
    connect(currensyMapStateToProps,
        {
            getRates:requestLatest
        }),
    )(ConversionContainer)