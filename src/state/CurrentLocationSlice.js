import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
  temp: "",
  weatherText: "",
  weatherIcon: "",
  key: "",
  forecast: [],
  loading: true
}

const CurrentLocationSlice = createSlice({
  name: "CurrentLocation",
  initialState: initialState,
  reducers: {
    setCity: (state, action) => {
      state.name = action.payload;
    },
    setTemp: (state, action) => {
      state.temp = action.payload;
    },  
    setWeatherText: (state, action) => {
      state.weatherText = action.payload;
    },
    setWeatherIcon: (state, action) => {
      state.weatherIcon = action.payload;
    },
    setKey: (state, action) => {
      state.key = action.payload;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    }
  },
});

export default CurrentLocationSlice;
