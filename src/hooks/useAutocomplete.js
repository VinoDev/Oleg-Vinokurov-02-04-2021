import { autocompleteSearch } from '../api.js';
import CurrentLocationSlice from '../state/weatherSlice.js';
import { useDispatch } from "react-redux";

const useAutocomplete = () => {

    const dispatch = useDispatch();
    const { 
        autocompleteRequest,
        autocompleteSuccess,
        autocompleteFail,
    } = CurrentLocationSlice.actions;
    
    const handleAutocomplete = async (userInput) => {
        try {
            dispatch(autocompleteRequest())

            const results = await autocompleteSearch(userInput);
    
            console.log(results);

            const mostRelevantResult = results[0];

            dispatch(
                autocompleteSuccess(
                    {key: mostRelevantResult.Key, city: mostRelevantResult.LocalizedName}
                )
            )
            
            return mostRelevantResult.Key;   
        } catch (error) {
            console.log("Autocomplete error")
            console.log(error);
            dispatch(autocompleteFail("Something went wrong..."))
            throw new Error(error);
        }
    }

    return { handleAutocomplete }
}

export default useAutocomplete;