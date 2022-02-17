const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'
const REMOVE_TOKEN   = 'REMOVE_TOKEN'

const defaultState = {
    token: null
}

export default function AuthReducer( state = defaultState, action) {
    switch(action.type) {
        case 'SET_AUTH_TOKEN': {
            return { ...state, token:action.token}
        }
        case 'REMOVE_TOKEN': {
            return {...state, token:defaultState.token}
        }
        default :
            return state
    }
}

export const setAuth = (token) => ({type: SET_AUTH_TOKEN,  token})
export const removeAuthToken = () => ({type: REMOVE_TOKEN})