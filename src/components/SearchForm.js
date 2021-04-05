import './searchForm.css';
import { TextField, CircularProgress, Button, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ForecastItem from './ForecastItem.js';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { autocompleteSearch, fetchWeather } from '../api.js';
import { useSnackbar } from 'notistack';
import CurrentLocationSlice from '../state/weatherSlice.js';
import useAutocomplete from '../hooks/useAutocomplete.js';
import useGetWeatherAndForecast from '../hooks/useGetWeatherAndForecast.js';

const SearchForm = () => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        const regex = /^[a-z_ ]+$/i
        if(e.target.value === '' || regex.test(e.target.value)){
            setUserInput(e.target.value)
        }
    }

    const { getWeatherAndForecast } = useGetWeatherAndForecast();

    return (
        <form className="search-form">
            <TextField
              variant="filled"  
              label="City"
              className="search-field"
              value={userInput}
              onChange={(e)=>handleChange(e)}
            />
            <Button>
                <SearchIcon/>
            </Button>
        </form>  
    );
    
}

export default SearchForm;
