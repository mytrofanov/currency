import axios from "axios";
import {InfoType, queryType, RatesType, SymbolsType} from "../Types/Types";


const instance = axios.create({
    withCredentials: false,
    baseURL: `https://api.exchangerate.host/`
})

type CurrencyLatestAPIType = {
    base?: string | null
    amount?: number | null
    date: string | null | number
    rates: Array<RatesType>
    success: boolean
}
type CurrencyConvertAPIType = {
    base: string | null
    date: string | null | number
    rates?: Array<RatesType>
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
    convert(from:string,to:string,amount:number) {
        return instance.get<CurrencyConvertAPIType>(`convert?from=${from}&to=${to}&amount=${amount}`)
            .then(response => {
                return response.data
            });
    },
    currencyLatest(base:string, amount:number) {
        return instance.get<CurrencyLatestAPIType>(`latest?base=${base}&amount=${amount}`)
            .then(response => {
                return response.data
            });
    },
    currencyHistorical(date:string,base:string, amount:number) {
        return instance.get<CurrencyLatestAPIType>(`${date}?base=${base}&amount=${amount}`)
            .then(response => {
                return response.data
            });
    },
    supportedSymbols() {
        return instance.get<SupportedSymbolsAPIType>(`symbols`)
            .then(response => {
                return response.data
            });
    },

}

