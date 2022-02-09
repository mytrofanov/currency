export type currencyMapStateToPropsType = {
    rates: Array<RatesType>
    symbols:Array<SymbolsType>
    selectedCurrency:string
    selectedTargetCurrency:string
    setSelectedAmount:(arg0:number)=>void
    selectedAmount:number

}
export type currencyMapDispatchToPropsType = {
    getRates: (base:string, amount:number) => Promise<void>
    setSelectedCurrency: (arg0: string)=>void
    setSelectedTargetCurrency:(arg0: string)=>void
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
}