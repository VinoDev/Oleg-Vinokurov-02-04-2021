import useGetWeatherAndForecast from "./useGetWeatherAndForecast.js"

const useLoadFavorite = () => {

    const { getWeatherAndForecast } = useGetWeatherAndForecast()

    const loadFavorite = ({key, city}, history) => {

        console.log(history);

        getWeatherAndForecast({key, city})
        history.push('/Oleg-Vinokurov-02-04-2021');
    }

    return {loadFavorite};

}

export default useLoadFavorite