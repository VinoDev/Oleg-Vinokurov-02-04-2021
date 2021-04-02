import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit"
import CurrentLoctionSlice from './state/CurrentLocationSlice.js';

const rootReducer = combineReducers({
    currentLocation: CurrentLoctionSlice.reducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;