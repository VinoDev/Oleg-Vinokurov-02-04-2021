import './weather-info.css';
import { TextField, CircularProgress } from "@material-ui/core";
import ForecastItem from './ForecastItem.js';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { autocompleteSearch, fetchWeather } from '../api.js';
import { mockAutocomplete, mockWeather } from '../mock.js';
import { useSnackbar } from 'notistack';
import CurrentLocationSlice from '../state/CurrentLocationSlice.js';
import useAutocomplete from '../hooks/useAutocomplete.js';
import useGetWeather from '../hooks/useGetWeather';

const WeatherInfo = () => {

    const { handleChange } = useAutocomplete();
    const { handleSubmit, data: {city, key, temp, weatherText, weatherIcon, forecast, loading} } = useGetWeather();

    if(loading){
        return (
            <div className="load-container">
                <CircularProgress/>
            </div>
        )
    } else {
        return (
          <div className="page">
                <TextField
                  variant="filled"  
                  label="City"
                  className="search"
                  onKeyPress={(e)=>handleSubmit(e)}
                />
    
                <div className="weather-info">
                    <div className="info-top">
                      <div className="current-city">
                          <div className="icon-demo">
                          </div>
                          <div className="current-city-info">
                              <span>{`${city && city}`}</span>
                              <span>{`${temp && temp+"'c"}`}</span>
                          </div>
                      </div>
                      <div className="favourite-toggle">
                          Favourite
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
          </div>
        );
    }
}

export default WeatherInfo;
