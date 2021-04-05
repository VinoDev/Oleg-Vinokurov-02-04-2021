import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
  temp: "",
  weatherText: "",
  weatherIcon: "",
  key: "",
  forecast: [],
  loading: false,
  error: ""
}

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    weatherAndForecastRequest: (state, action) => {
      state.loading = true;
    },
    weatherAndForecastSuccess: (state, action) => {
      state.loading = false;
      state.weatherText = action.payload.weatherText;
      state.weatherIcon = action.payload.weatherIcon;
      state.temp = action.payload.temp;
      state.forecast = action.payload.forecast;
    },
    weatherAndForecastFail: (state, action) => {
      state.loading = false;
      state.error = action.payload
    },
    autocompleteRequest: (state, action) => {
      state.loading = true;
    },
    autocompleteSuccess: (state, action) => {
      state.loading = false;
      state.key = action.payload.key
      state.city = action.payload.city
    },
    autocompleteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload
    }
  },
});

export default weatherSlice;
