export type currencyMapStateToPropsType = {
    rates: Array<RatesType>
}
export type currencyMapDispatchToPropsType = {
    getRates: () => void
}
export type RatesType = {
    [key: string] : number
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
