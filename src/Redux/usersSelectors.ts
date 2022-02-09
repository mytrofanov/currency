import {AppStateType} from "./reduxStore";

export const getRates = (state:AppStateType) => {
    return state.currency.rates;
}
export const getSymbols = (state:AppStateType) => {
    return state.currency.symbols;
}
export const getSelectedCurrency = (state:AppStateType) => {
    return state.currency.selectedCurrency;
}
export const getSelectedTargetCurrency = (state:AppStateType) => {
    return state.currency.selectedTargetCurrency;
}
export const getSelectedAmount = (state:AppStateType) => {
    return state.currency.selectedAmount;
}



