const SET_BASIS_CURRENCY = 'SET_BASIS_CURRENCY'
const SET_DEFAULT_BASIS = 'SET_DEFAULT_BASIS'

const defaultState = {
    basis: 'USD'
}

export default function CurrencyReducer( state = defaultState, action) {
    switch(action.type) {
        case 'SET_BASIS_CURRENCY': {
            return { ...state,  basis: action.payload}
        }
        case 'SET_DEFAULT_BASIS': {
            return {...defaultState}
        }
        default :
            return { ...state}
    }
}

export const setBasisCurrency = (payload) => ({type: SET_BASIS_CURRENCY, payload})
export const setDefaultCurrency = () => ({type: SET_DEFAULT_BASIS})