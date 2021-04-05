import { useDispatch } from "react-redux";
import { fetchWeather, fetchForecast } from '../api.js';
import weatherSlice from '../state/weatherSlice.js';
import dateToDay from '../utils/dateToDay.js';

const useGetWeatherAndForecast = () => {
    
    const dispatch = useDispatch();
    const { 
        weatherAndForecastRequest,
        weatherAndForecastSuccess,
        weatherAndForecastFail
    } = weatherSlice.actions;

    const getWeatherAndForecast = async (key) => {
        try {

            dispatch(weatherAndForecastRequest());

            const weather = await handleWeatherData(key);
            const forecast = await handleForecastData(key);

            const data = {...weather, forecast}
            console.log(data);
            
            dispatch(weatherAndForecastSuccess(data))

        } catch (error) {
            console.log("weatherAndForecast error");
            console.log(error);
            dispatch(weatherAndForecastFail("Something went wrong..."))
            throw new Error(error);
        }
    }

    const handleWeatherData = async (key) => {
        const result = await fetchWeather(key);

        console.log(result);
        const weatherData = {
            temp: result.Temperature.Metric.Value.toString(),
            weatherText: result.WeatherText,
            weatherIcon: result.WeatherIcon
        }

        return weatherData;
    }

    const handleForecastData = async (key) => {
        const result = await fetchForecast(key);

        const forecastData = result.map(dayForecast => {

            return {
                day: dateToDay(dayForecast.Date),
                minTemp: dayForecast.Temperature.Minimum.Value.toString(),
                maxTemp: dayForecast.Temperature.Maximum.Value.toString()
            }
        })

        return forecastData;
    }

    return { getWeatherAndForecast }
}

export default useGetWeatherAndForecast;