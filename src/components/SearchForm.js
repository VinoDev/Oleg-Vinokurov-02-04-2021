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
import CurrentLocationSlice from '../state/CurrentLocationSlice.js';
import useAutocomplete from '../hooks/useAutocomplete.js';
import useGetWeather from '../hooks/useGetWeather';

const SearchForm = () => {

    return (
        <form className="search-form">
            <TextField
              variant="filled"  
              label="City"
              className="search-field"
            />
            <Button>
                <SearchIcon/>
            </Button>
        </form>  
    );
    
}

export default SearchForm;
