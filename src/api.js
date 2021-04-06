const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = async (locationKey) => {

    const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
    try {

        const res = await fetch(url);
        const data = await res.json();

        return data[0];
    } catch (error) {
        throw new Error(error)
    }
}

export const fetchForecast = async (locationKey) => {
    const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`
    try {
        const res = await fetch(url);
        const data = await res.json();

        return data.DailyForecasts
    } catch (error) {
        throw new Error(error)
    }
}

export const autocompleteSearch = async (query) => {
    const url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
    try {
        const res = await fetch(url);
        let data = await res.json();

        return data 
    } catch (error) {
        throw new Error(error)
    }
}