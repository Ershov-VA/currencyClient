const SET_ALL_RATES_BY_TODAY = 'SET_ALL_RATES_BY_TODAY'
const REMOVE_ALL_RATES = 'REMOVE_ALL_RATES'

const defaultState = {
    date: null,
    rates: []
}

export default function RateReducer( state = defaultState, action) {
    switch(action.type) {
        case 'SET_ALL_RATES_BY_TODAY': {
            return { ...state, rates:action.payload.rates, date: action.payload.date}
        }
        case 'REMOVE_ALL_RATES': {
            return {...defaultState}
        }
        default :
            return { ...state}
    }
}

export const setTodayRates = (payload) => ({type: SET_ALL_RATES_BY_TODAY, payload})
export const removeAllRates = () => ({type: REMOVE_ALL_RATES})