import { TextField } from "@material-ui/core";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { autocompleteSearch, fetchWeather, fetchForecast } from '../api.js';
import { mockAutocomplete, mockWeather, mockForecast } from '../mock.js';
import { useSnackbar } from 'notistack';
import CurrentLocationSlice from '../state/CurrentLocationSlice.js';
import useAutocomplete from '../hooks/useAutocomplete.js';
import dateToDay from '../utils/dateToDay.js';

const useGetWeather = () => {
    
    //useGetWeatherAndForecast

    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const { autocompleteResult } = useAutocomplete();
    const { 
        weatherAndForecastRequest,
        weatherAndForecastSuccess,
        weatherAndForecastFail
    } = CurrentLocationSlice.actions;
    const { 
        city, 
        key, 
        temp, 
        weatherIcon, 
        weatherText, 
        forecast,
        loading
    } = useSelector((state)=>state.currentLocation);

    const getWeatherAndForecast = async (key) => {
        try {
            dispatch(weatherAndForecastRequest());

            const weather = await handleWeatherData()
            const forecast = await handleForecastData()

            
        } catch (error) {
            dispatch(weatherAndForecastFail("Something went wrong..."))
        }
    }

    const handleSubmit = async (e) => {
        if(e.key === "Enter") {
            e.preventDefault();
            console.log(autocompleteResult)
            if(autocompleteResult) {
                const cityData = {city: autocompleteResult.city, key: autocompleteResult.key}
                dispatch(updateCityData(cityData))
            }

            e.target.value = ''
        }
    }

    const handleAutocomplete = async (query) => {
        
        if(query.length > 0) { 

            const results = await autocompleteSearch(query);

            const mostRelevantResult = results[0];

            return mostRelevantResult;
        }
        console.log(autocompleteResult);
    }

    const handleWeatherData = async () => {
        const result = await fetchWeather(key);

        const weatherData = {
            temp: result.temp,
            weatherText: result.weatherText,
            weatherIcon: result.weatherIcon
        }

        return weatherData;
    }

    const handleForecastData = async () => {
        const result = await fetchForecast(key);

        const forecastData = result.map(dayForecast => {
            const avgTemp = ((dayForecast.Temperature.Minimum.Value + dayForecast.Temperature.Maximum.Value)/2)
            return {
                day: dateToDay(dayForecast.Date),
                temp: avgTemp.toString()
            }
        })
    }

    const data = {city, key, temp, weatherText, weatherIcon, forecast, loading};

    return { handleSubmit, data }
}

export default useGetWeather;