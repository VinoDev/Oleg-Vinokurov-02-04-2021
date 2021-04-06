import { useState } from 'react';
import useAutocomplete from '../hooks/useAutocomplete.js';
import useGetWeatherAndForecast from '../hooks/useGetWeatherAndForecast.js';

const useForm = () => {

    const [ userInput, setUserInput ] = useState('');
    const { getWeatherAndForecast } = useGetWeatherAndForecast();
    const { handleAutocomplete } = useAutocomplete();

    const handleChange = (e) => {
        const regex = /^[a-z_ ]+$/i
        if(e.target.value === '' || regex.test(e.target.value)){
            setUserInput(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            if(userInput){
                userInput.trim();

                const cityData = await handleAutocomplete(userInput);
                setUserInput('');
                
                if(cityData.key){
                    getWeatherAndForecast({...cityData})
                    return true
                } else {
                    return false
                }
            } 
        } catch (error) {
            console.log("handleSubmit error")
            console.log(error);
        }
    }

    return { handleSubmit, handleChange, userInput }
    
}

export default useForm;
