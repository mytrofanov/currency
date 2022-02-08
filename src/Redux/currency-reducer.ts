import {currencyAPI} from "../API/Api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import { AppStateType } from "./reduxStore";
import {RatesType} from "../Types/Types";


const SET_LATEST_RATES = 'SET_LATEST_RATES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    rates: [] as Array<RatesType> ,
    symbols: [] ,
    baseCurrency: '',
    isFetching: false,
};

type InitialStateType = typeof initialState


const currencyReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_LATEST_RATES: {
            return {...state, rates: action.rates}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

}

type ActionType = setCurrencyType | toggleIsFetchingType

type setCurrencyType = {
    type: typeof SET_LATEST_RATES
    rates: Array<RatesType>
}
export const setRates = (rates: Array<RatesType>): setCurrencyType => ({type: SET_LATEST_RATES, rates})
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
        dispatch(setRates(rates));
    }
}
type DispatchType = Dispatch<ActionType>
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, any , ActionType>



export const requestExchange = async () => {
    let data = await currencyAPI.convert();
    console.log(data)
}



export default currencyReducer;
