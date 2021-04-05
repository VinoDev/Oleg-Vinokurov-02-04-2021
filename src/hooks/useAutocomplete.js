import { useState } from 'react';
import { autocompleteSearch, fetchWeather } from '../api.js';
import CurrentLocationSlice from '../state/CurrentLocationSlice.js';
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from 'notistack';


const useAutocomplete = () => {

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const { setAutocompleteResult } = CurrentLocationSlice.actions;
    const { autocompleteResult } = useSelector((state)=>state.currentLocation);

    const handleChange = async (query) => {
        
        if(query.length > 0) { 
            const results = await autocompleteSearch(query);
            // const results = mockAutocomplete;

            if(results.error) {
                enqueueSnackbar(results.error, {variant: "error", preventDuplicate: true})
                return false;
            }

            const mostRelevantResult = results[0];

            dispatch(setAutocompleteResult(mostRelevantResult));
        }
        console.log(autocompleteResult);
    }

    return {autocompleteResult}
}

export default useAutocomplete;