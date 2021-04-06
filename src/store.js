import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit"
import weatherSlice from './state/weatherSlice.js';
import favouritesSlice from './state/favouritesSlice.js';

const rootReducer = combineReducers({
    weather: weatherSlice.reducer,
    favourites: favouritesSlice.reducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;