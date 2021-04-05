import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
  temp: "",
  weatherText: "",
  weatherIcon: "",
  key: "",
  forecast: [],
  loadingData: false,
  loadingAutocomplete: false,
  error: ""
}

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    weatherAndForecastRequest: (state, action) => {
      state.loadingData = true;
    },
    weatherAndForecastSuccess: (state, action) => {
      state.loadingData = false;
      state.weatherText = action.payload.weatherText;
      state.weatherIcon = action.payload.weatherIcon;
      state.temp = action.payload.temp;
      state.forecast = action.payload.forecast;
    },
    weatherAndForecastFail: (state, action) => {
      state.loadingData = false;
      state.error = action.payload
    },
    autocompleteRequest: (state, action) => {
      state.loadingAutocomplete = true;
    },
    autocompleteSuccess: (state, action) => {
      state.loadingAutocomplete = false;
      state.key = action.payload.key
      state.city = action.payload.city
    },
    autocompleteFail: (state, action) => {
      state.loadingAutocomplete = false;
      state.error = action.payload
    }
  },
});

export default weatherSlice;
