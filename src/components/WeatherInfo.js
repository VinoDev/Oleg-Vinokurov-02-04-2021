import './weather-info.css';
import ForecastItem from './ForecastItem.js';
import { useSelector } from "react-redux";
import FavoriteButton from './FavoriteButton.js';
import iconPicker from '../utils/iconPicker.js';

const WeatherInfo = () => {

    const { city, temp, forecast, weatherIcon } = useSelector((state) => state.weather);

    return (
        <div className="weather-info">

            <div className="info-top">
                
                <div className="current-city">
                    <img src={iconPicker(weatherIcon)} alt="icon" className="icon-demo"/>
                    <div className="current-city-info">
                        <span>{`${city}`}</span>
                        <span>{`${temp} °C`}</span>
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
