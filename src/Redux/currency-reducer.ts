import {currencyAPI} from "../API/Api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import { AppStateType } from "./reduxStore";
import {RatesType, SymbolsType} from "../Types/Types";


const SET_LATEST_RATES = 'SET_LATEST_RATES';
const SET_SYMBOLS = 'SET_SYMBOLS';
const SET_SELECTED_CURRENCY = 'SET_SELECTED_CURRENCY';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    rates: [] as Array<RatesType> ,
    symbols: [] as Array<SymbolsType> ,
    selectedCurrency: '',
    isFetching: false,
};

type InitialStateType = typeof initialState


const currencyReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_LATEST_RATES: {
            return {...state, rates: action.rates}
        }
        case SET_SYMBOLS: {
            return {...state, symbols: action.symbols}
        }
        case SET_SELECTED_CURRENCY: {
            return {...state, selectedCurrency: action.selectedCurrency}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

}

type ActionType = setCurrencyType | toggleIsFetchingType | setSymbolsType | setSelectedCurrencyType

type setCurrencyType = {
    type: typeof SET_LATEST_RATES
    rates: Array<RatesType>
}
type setSymbolsType = {
    type: typeof SET_SYMBOLS
    symbols: Array<SymbolsType>
}
type setSelectedCurrencyType = {
    type: typeof SET_SELECTED_CURRENCY
    selectedCurrency: string
}
export const setLatestRates = (rates: Array<RatesType>): setCurrencyType => ({type: SET_LATEST_RATES, rates})
export const setSymbols = (symbols: Array<SymbolsType>): setSymbolsType => ({type: SET_SYMBOLS, symbols})
export const setSelectedCurrency = (selectedCurrency: string): setSelectedCurrencyType => ({
    type: SET_SELECTED_CURRENCY, selectedCurrency})

export type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching:boolean):toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})

export const requestLatest = ():ThunkActionType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await currencyAPI.currencyLatest();
        let rates = data.rates
        dispatch(toggleIsFetching(false));
        dispatch(setLatestRates(rates));
    }
}
export const requestSupportedSymbols = ():ThunkActionType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await currencyAPI.supportedSymbols();
        dispatch(toggleIsFetching(false));
        dispatch(setSymbols(data.symbols));
    }
}
type DispatchType = Dispatch<ActionType>
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, any , ActionType>






export default currencyReducer;
