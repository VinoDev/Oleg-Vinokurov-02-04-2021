const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = async (locationKey) => {

    const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
    try {
        console.log(url)
        const res = await fetch(url);
        const data = await res.json();

        const currentWeather = {
            weatherText: data.weatherText,
            weatherIcon: data.weatherIcon,
            temp: data.Temprature.Metric.Value.toString()
        }

        console.log("fetchWeather api")
        console.log(currentWeather)

        return currentWeather;
    } catch (error) {
        throw new Error(error)
    }
}

export const fetchForecast = async (locationKey) => {
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log("fetchForecast api")
        console.log(data)

        return data.DailyForecasts
    } catch (error) {
        throw new Error(error)
    }
}

export const autocompleteSearch = async (query) => {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
    try {
        const res = await fetch(url);
        let data = await res.json();
        console.log("autocompleteSearch api")
        console.log(data)

        return data 
    } catch (error) {
        throw new Error(error)
    }
}