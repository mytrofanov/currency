import {AppStateType} from "./reduxStore";

export const getRates = (state:AppStateType) => {
    return state.currency.rates;
}



