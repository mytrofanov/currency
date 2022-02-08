import axios from "axios";
import {InfoType, queryType, RatesType, SymbolsType} from "../Types/Types";


const instance = axios.create({
    withCredentials: false,
    baseURL: `https://api.exchangerate.host/`
})

type CurrencyLatestAPIType = {
    base: string | null
    date: string | null | number
    rates: Array<RatesType>
    success: boolean
}
type CurrencyConvertAPIType = {
    base: string | null
    date: string | null | number
    rates: Array<RatesType>
    success: boolean
    query: queryType
    info: InfoType
    historical: boolean
    result: number
}
export type SupportedSymbolsAPIType = {
    success: boolean
    symbols: Array<SymbolsType>
    info: InfoType
    historical: boolean
    result: number
}
export const currencyAPI = {
    convert() {
        return instance.get<CurrencyConvertAPIType>(`convert?from=USD&to=EUR`)
            .then(response => {
                console.log('from API.convert: ',response)
                return response.data
            });
    },
    currencyLatest() {
        return instance.get<CurrencyLatestAPIType>(`latest`)
            .then(response => {
                return response.data
            });
    },
    supportedSymbols() {
        return instance.get<SupportedSymbolsAPIType>(`symbols`)
            .then(response => {
                console.log('currencyAPI.supportedSymbols(): ',response)
                return response.data
            });
    },

}

