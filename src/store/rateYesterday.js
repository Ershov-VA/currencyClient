const SET_ALL_RATES_BY_YESTERDAY = 'SET_ALL_RATES_BY_YESTERDAY'
const REMOVE_ALL_YESTERDAY_RATES = 'REMOVE_ALL_YESTERDAY_RATES'

const defaultState = {
    date: null,
    rates: []
}

export default function RateYesterdayReducer( state = defaultState, action) {
    switch(action.type) {
        case 'SET_ALL_RATES_BY_YESTERDAY': {
            return { ...state, rates: action.payload.rates, date: action.payload.date}
        }
        case 'REMOVE_ALL_YESTERDAY_RATES': {
            return {...defaultState}
        }
        default :
            return {...state}
    }
}

export const setYesterdayRates = (payload) => ({type: SET_ALL_RATES_BY_YESTERDAY, payload})
export const removeYesterdayRates = () => ({type: REMOVE_ALL_YESTERDAY_RATES})