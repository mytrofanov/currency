import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import currencyReducer from './currency-reducer'

let rootReducer = combineReducers({
    currency: currencyReducer,
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

// @ts-ignore
window.__store__ = store;
export default store;