import {currencyAPI} from "../API/Api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import { AppStateType } from "./reduxStore";
import {RatesType, SymbolsType} from "../Types/Types";


const SET_LATEST_RATES = 'SET_LATEST_RATES';
const SET_SYMBOLS = 'SET_SYMBOLS';
const SET_SELECTED_CURRENCY = 'SET_SELECTED_CURRENCY';
const SET_SELECTED_TARGET_CURRENCY = 'SET_SELECTED_TARGET_CURRENCY';
const SET_SELECTED_AMOUNT = 'SET_SELECTED_AMOUNT';
const SET_SELECTED_DATE1 = 'SET_SELECTED_DATE1';
const SET_SELECTED_DATE2 = 'SET_SELECTED_DATE2';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    rates: [] as Array<RatesType> ,
    symbols: [] as Array<SymbolsType> ,
    selectedCurrency: 'AED',
    selectedTargetCurrency: 'AED',
    selectedAmount: 1 as number,
    selectedDate1: '',
    selectedDate2: '',
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
        case SET_SELECTED_TARGET_CURRENCY: {
            return {...state, selectedTargetCurrency: action.selectedTargetCurrency}
        }
        case SET_SELECTED_AMOUNT: {
            return {...state, selectedAmount: action.selectedAmount}
        }
        case SET_SELECTED_DATE1: {
            return {...state, selectedDate1: action.selectedDate1}
        }
        case SET_SELECTED_DATE2: {
            return {...state, selectedDate2: action.selectedDate2}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

}

type ActionType = setCurrencyType | toggleIsFetchingType | setSymbolsType | setSelectedCurrencyType |
    setSelectedAmountType | setSelectedDate1Type | setSelectedDate2Type | setSelectedTargetCurrencyType

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
type setSelectedTargetCurrencyType = {
    type: typeof SET_SELECTED_TARGET_CURRENCY
    selectedTargetCurrency: string
}
type setSelectedAmountType = {
    type: typeof SET_SELECTED_AMOUNT
    selectedAmount: number
}
type setSelectedDate1Type = {
    type: typeof SET_SELECTED_DATE1
    selectedDate1: string
}
type setSelectedDate2Type = {
    type: typeof SET_SELECTED_DATE2
    selectedDate2: string
}
export const setLatestRates = (rates: Array<RatesType>): setCurrencyType => ({type: SET_LATEST_RATES, rates})
export const setSymbols = (symbols: Array<SymbolsType>): setSymbolsType => ({type: SET_SYMBOLS, symbols})
export const setSelectedCurrency = (selectedCurrency: string): setSelectedCurrencyType => ({
    type: SET_SELECTED_CURRENCY, selectedCurrency})
export const setSelectedTargetCurrency = (selectedTargetCurrency: string): setSelectedTargetCurrencyType => ({
    type: SET_SELECTED_TARGET_CURRENCY, selectedTargetCurrency})
export const setSelectedAmount = (selectedAmount: number): setSelectedAmountType => ({
    type: SET_SELECTED_AMOUNT, selectedAmount})

export const setSelectedDate1 = (selectedDate1: string): setSelectedDate1Type => ({
    type: SET_SELECTED_DATE1, selectedDate1})
export const setSelectedDate2 = (selectedDate2: string): setSelectedDate2Type => ({
    type: SET_SELECTED_DATE2, selectedDate2})

export type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching:boolean):toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})

export const requestLatest = (selectedCurrency:string,selectedAmount:number):ThunkActionType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await currencyAPI.currencyLatest(selectedCurrency, selectedAmount);
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
