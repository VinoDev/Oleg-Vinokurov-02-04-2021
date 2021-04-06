import './weather-info.css';
import { IconButton, Divider } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ForecastItem from './ForecastItem.js';
import { useSelector } from "react-redux";
import FavoriteButton from './FavoriteButton.js';

const WeatherInfo = () => {

    const { city, temp, forecast } = useSelector((state) => state.weather);
    
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

                <FavoriteButton/>

            </div>
            <div className="info-bottom">
                {forecast.length > 0 && forecast.map((dayForecast, index) => {
                    return (
                        <ForecastItem 
                            key={index}
                            data={{
                                day: dayForecast.day,
                                minTemp: dayForecast.minTemp,
                                maxTemp: dayForecast.maxTemp
                            }}
                        /> 
                    )                       
                })}              
            </div>
        </div>
    )
}

export default WeatherInfo;
