import {historyType} from "../Redux/currency-reducer";

export type currencyMapStateToPropsType = {
    rates: Array<RatesType>
    symbols:Array<SymbolsType>
    selectedCurrency:string
    selectedTargetCurrency:string
    setSelectedAmount:(arg0:number)=>void
    selectedAmount:number
    conversionResult: number
    conversionRate: InfoType
    conversionHistory: Array<number & string>
    requestConvert:(from:string, to:string, amount:number) => Promise<void>
    setConversionHistory:(arg0:Array<historyType>)=>void
}
export type HistoricalMapStateToPropsType = {
    historicalRates: Array<RatesType>
    symbols:Array<SymbolsType>
    selectedCurrency:string
    selectedTargetCurrency:string
    setSelectedAmount:(arg0:number)=>void
    selectedAmount:number
}
export type HistoricalMapDispatchToPropsType = {
    getHistoricalRates:(date:string, base:string, amount:number) => Promise<void>
    setSelectedCurrency:(arg0: string)=>void
    historicalRates: Array<RatesType>
    symbols:Array<SymbolsType>
    selectedCurrency:string
    setSelectedAmount:(arg0:number)=>void
    selectedAmount:number
}
export type currencyMapDispatchToPropsType = {
    getRates: (base:string, amount:number) => Promise<void>
    setSelectedCurrency: (arg0: string)=>void
    setSelectedTargetCurrency:(arg0: string)=>void
    setConversionHistory:(arg0:Array<historyType>)=>void
}
export type RatesType = {
    [key: string|number ] : number
}

export interface Item {
    from: string
    to: string
    amount: number
}
export type queryType = {
    [key:string] :Item
}

export type InfoType = {
    rate: number | string
}
export type SymbolsType = {
    [key: string]: {
        description: string
        code: string
    }
}
export type ConversionPropsType = {
    rates: Array<RatesType>
    getRates: (base:string, amount:number) => Promise<void>
    symbols: Array<SymbolsType>
    setSelectedCurrency:(arg0:string)=>void
    selectedCurrency:string
    selectedTargetCurrency:string
    setSelectedAmount:(arg0:number)=>void
    selectedAmount:number
    setSelectedTargetCurrency:(arg0:string)=>void
    conversionResult: number
    conversionRate: InfoType
    conversionHistory: Array<number & string>,
    requestConvert: (from:string, to:string, amount:number) => Promise<void>
    setConversionHistory:(arg0:Array<historyType>)=>void
}
export type HystoricalPropsType = {
    getHistoricalRates: (date:string, base:string, amount:number) => Promise<void>
    symbols: Array<SymbolsType>
    setSelectedCurrency:(arg0:string)=>void
    selectedCurrency:string
    setSelectedAmount:(arg0:number)=>void
    selectedAmount:number
}