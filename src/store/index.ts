import {combineReducers, createStore} from 'redux'
import AuthReducer from './auth'
import RateReducer from './rate'
import RateYesterdayReducer from './rateYesterday'
import CurrencyReducer from './currency'

const rootReducer = combineReducers({
    auth: AuthReducer,
    rate: RateReducer,
    rateYesterday: RateYesterdayReducer,
    currency: CurrencyReducer
})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>

