import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
  temp: "",
  weatherText: "",
  weatherIcon: "",
  key: "",
  forecast: [],
  autocompleteResult: null,
  loading: false,
  error: ""
}

const CurrentLocationSlice = createSlice({
  name: "CurrentLocation",
  initialState: initialState,
  reducers: {
    weatherAndForecastRequest: (state, action) => {
      state.loading = true;
    },
    weatherAndForecastSuccess: (state, action) => {
      state.loading = false;
      state.key = action.payload.key;
      state.weatherText = action.payload.weatherText;
      state.weatherIcon = action.payload.weatherIcon;
      state.temp = action.payload.temp;
      state.forecast = action.payload.forecast;
      state.city = action.payload.city
    },
    weatherAndForecastFail: (state, action) => {
      state.loading = false;
      state.error = action.payload
    }
  },
});

export default CurrentLocationSlice;
