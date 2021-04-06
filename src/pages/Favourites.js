import { CircularProgress } from "@material-ui/core";
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import useGetWeatherAndForecast from '../hooks/useGetWeatherAndForecast.js';
import SearchForm from '../components/SearchForm.js'
import WeatherInfo from '../components/WeatherInfo.js'
import useForm from "../hooks/useForm.js";
import useErrorHandler from '../hooks/useErrorHandler.js'

const Favourites = () => {

    // useEffect(()=>{
    //     const initCity = {key: "215854", city: "Tel Aviv"}
    //     getWeatherAndForecast(initCity)
    // }, [])

    // if(loadingAutocomplete || loadingData){
    //     return (
    //         <div className="load-container">
    //             <CircularProgress/>
    //         </div>
    //     )
    // } else {
        return (
            <div className="page">
                Test
            </div>
        );
    //}
}

export default Favourites;
