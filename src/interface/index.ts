export type RateItem = {
    ticker: string
    cost: number
}
export type FetchData = {
    date: string,
    rates?: RateItem[]
}