import { TextField, CircularProgress, Button, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ForecastItem from '../components/ForecastItem.js';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { autocompleteSearch, fetchWeather } from '../api.js';
import { useSnackbar } from 'notistack';
import CurrentLocationSlice from '../state/weatherSlice.js';
import useAutocomplete from '../hooks/useAutocomplete.js';
import useGetWeatherAndForecast from '../hooks/useGetWeatherAndForecast.js';
import SearchField from '../components/SearchForm.js'
import WeatherInfo from '../components/WeatherInfo.js'

const Home = () => {

    const { handleChange } = useAutocomplete();
    const { getWeatherAndForecast } = useGetWeatherAndForecast();

    const loading = false;

    if(loading){
        return (
            <div className="load-container">
                <CircularProgress/>
            </div>
        )
    } else {
        return (
            <div className="page">
                <SearchField/>
                <WeatherInfo/>
            </div>
        );
    }
}

export default Home;
