const API_KEY = process.env.REACT_APP_API_KEY;

export const getCurrentConditions = async (locationKey) => {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
    try {
        const res = await fetch(url);
        const data = await res.json();

        const currentConditions = {
            weatherText: data.weatherText,
            weatherIcon: data.weatherIcon,
            temp: data.Temprature.Metric.Value.toString()
        }

        return currentConditions;
    } catch (error) {
        
    }
}

export const getForecast = async (locationKey) => {
    const url = `http://dataservice.accuweather.com/forecast/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`
    try {
        const res = await fetch(url);
        const data = await res.json();

        return data.DailyForecasts
    } catch (error) {
        
    }
}

export const autocompleteSearch = async (query) => {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
    try {
        const res = await fetch(url);
        const data = await res.json();

        return data
    } catch (error) {
        
    }
}