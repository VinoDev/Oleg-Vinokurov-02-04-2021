import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit"
import weatherSlice from './state/weatherSlice.js';

const rootReducer = combineReducers({
    weather: weatherSlice.reducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;