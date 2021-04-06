import { TextField, CircularProgress, Button, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ForecastItem from '../components/ForecastItem.js';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { autocompleteSearch, fetchWeather } from '../api.js';
import { useSnackbar } from 'notistack';
import weatherSlice from '../state/weatherSlice.js';
import useAutocomplete from '../hooks/useAutocomplete.js';
import useGetWeatherAndForecast from '../hooks/useGetWeatherAndForecast.js';
import SearchForm from '../components/SearchForm.js'
import WeatherInfo from '../components/WeatherInfo.js'
import useForm from "../hooks/useForm.js";
import useErrorHandler from '../hooks/useErrorHandler.js'

const Home = () => {

    const { loadingData, loadingAutocomplete, error } = useSelector((state) => state.weather);
    const { handleSubmit, handleChange, userInput } = useForm();
    const { showErrorMessage } = useErrorHandler()
    const { getWeatherAndForecast } = useGetWeatherAndForecast()

    useEffect(()=>{
        const initCity = {key: "215854", city: "Tel Aviv"}
        getWeatherAndForecast(initCity)
    }, [])

    useEffect(()=>{
        error && showErrorMessage(error)
    }, [error])

    if(loadingAutocomplete || loadingData){
        return (
            <div className="load-container">
                <CircularProgress/>
            </div>
        )
    } else {
        return (
            <div className="page">
                <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} userInput={userInput} />
                <WeatherInfo/>
            </div>
        );
    }
}

export default Home;
