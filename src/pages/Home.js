import { CircularProgress } from "@material-ui/core";
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import useGetWeatherAndForecast from '../hooks/useGetWeatherAndForecast.js';
import SearchForm from '../components/SearchForm.js'
import WeatherInfo from '../components/WeatherInfo.js'
import useForm from "../hooks/useForm.js";
import useErrorHandler from '../hooks/useErrorHandler.js'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const Home = () => {

    const { handleSubmit, handleChange, userInput } = useForm();
      
    const { loadingData, loadingAutocomplete, error } = useSelector((state) => state.weather);  

    // useEffect(()=>{
    //     const initCity = {key: "215854", city: "Tel Aviv"}
    //     getWeatherAndForecast(initCity)
    // }, [])   

    if( loadingData || loadingAutocomplete ) {
        return (
          <div className="load-container">
            <CircularProgress/>
          </div>
        )
    } else {
        return (
            <div className="page">
                <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} userInput={userInput} />
                {!error && <WeatherInfo/>}
            </div>
        );
    }
    
}

export default Home;
