import './weather-info.css';
import { TextField, CircularProgress, Button, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ForecastItem from './ForecastItem.js';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { autocompleteSearch, fetchWeather } from '../api.js';
import { useSnackbar } from 'notistack';
import CurrentLocationSlice from '../state/weatherSlice.js';
import useAutocomplete from '../hooks/useAutocomplete.js';
import useGetWeatherAndForecast from '../hooks/useGetWeatherAndForecast.js';
import SearchField from './SearchForm.js'

const WeatherInfo = () => {

    const { city, temp } = useSelector((state) => state.weather);

    const forecast = []

    return (
        <div className="weather-info">
            <div className="info-top">
                <div className="current-city">
                    <div className="icon-demo">
                    </div>
                    <div className="current-city-info">
                        <span>{`${city && city}`}</span>
                        <span>{`${temp && temp+" °C"}`}</span>
                    </div>
                </div>
                <div className="favourite-toggle">
                    <IconButton>
                        <FavoriteBorderIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="info-bottom">
                {forecast.length > 0 && forecast.map((dayForecast, index) => {
                    return (
                        <ForecastItem 
                            key={index}
                            data={{
                                day: dayForecast.day,
                                temp: dayForecast.temp
                            }}
                        /> 
                    )                       
                })}              
            </div>
        </div>
    )
}

export default WeatherInfo;
