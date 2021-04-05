import { useState } from 'react';
import { autocompleteSearch, fetchWeather } from '../api.js';
import CurrentLocationSlice from '../state/weatherSlice.js';
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from 'notistack';


const useAutocomplete = () => {

    const dispatch = useDispatch();
    const { 
        autocompleteRequest,
        autocompleteSuccess,
        autocompleteFail
    } = CurrentLocationSlice.actions;
    
    const handleAutocomplete = async (userInput) => {
        try {
            dispatch(autocompleteRequest())

            userInput.trim();

            const results = await autocompleteSearch(userInput);
    
            const mostRelevantResult = results[0];

            dispatch(
                autocompleteSuccess(
                    {key: mostRelevantResult.key, city: mostRelevantResult.LocalizedName}
                )
            )

            return mostRelevantResult;   
        } catch (error) {
            dispatch(autocompleteFail("Something went wrong..."))
            console.log("Autocomplete error")
            console.log(error);
        }
    }

    return { handleAutocomplete }
}

export default useAutocomplete;