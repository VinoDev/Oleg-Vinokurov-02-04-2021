import { TextField } from "@material-ui/core";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { autocompleteSearch, fetchWeather, fetchForecast } from '../api.js';
import { useSnackbar } from 'notistack';
import CurrentLocationSlice from '../state/weatherSlice.js';
import useAutocomplete from '../hooks/useAutocomplete.js';
import dateToDay from '../utils/dateToDay.js';

const useGetWeatherAndForecast = () => {
    
    const dispatch = useDispatch();
    const { 
        weatherAndForecastRequest,
        weatherAndForecastSuccess,
        weatherAndForecastFail
    } = CurrentLocationSlice.actions;

    const { key, city } = useSelector((state) => state.weather);

    const getWeatherAndForecast = async () => {
        try {

            dispatch(weatherAndForecastRequest());

            const weather = await handleWeatherData(key);
            const forecast = await handleForecastData(key);

            const data = {...weather, forecast}
            
            dispatch(weatherAndForecastSuccess(data))

        } catch (error) {
            dispatch(weatherAndForecastFail("Something went wrong..."))
            console.log("weatherAndForecast error");
            console.log(error);
        }
    }

    const handleWeatherData = async (key) => {
        const result = await fetchWeather(key);

        const weatherData = {
            temp: result.temp,
            weatherText: result.weatherText,
            weatherIcon: result.weatherIcon
        }

        return weatherData;
    }

    const handleForecastData = async (key) => {
        const result = await fetchForecast(key);

        const forecastData = result.map(dayForecast => {
            const avgTemp = ((dayForecast.Temperature.Minimum.Value + dayForecast.Temperature.Maximum.Value)/2)
            return {
                day: dateToDay(dayForecast.Date),
                temp: avgTemp.toString()
            }
        })
    }

    return { getWeatherAndForecast }
}

export default useGetWeatherAndForecast;