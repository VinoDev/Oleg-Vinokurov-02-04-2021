import './home.css';
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import SearchForm from '../components/SearchForm.js'
import WeatherInfo from '../components/WeatherInfo.js'
import useForm from "../hooks/useForm.js";

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
            <div className="home">
                <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} userInput={userInput} />
                {!error && <WeatherInfo/>}
            </div>
        );
    }
    
}

export default Home;
