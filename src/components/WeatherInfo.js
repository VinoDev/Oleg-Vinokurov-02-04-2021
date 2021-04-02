import './weather-info.css';
import { TextField } from "@material-ui/core";
import ForecastItem from './ForecastItem.js';
import { useEffect, useState } from 'react';
import { autocompleteSearch } from '../api.js';
import { mockAutocomplete } from '../mock.js';
import { useSnackbar } from 'notistack';

const WeatherInfo = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [ autocompleteResult, setAutocompleteResult ] = useState([]);
    const [ error, setError ] = useState(''); 

    const handleChange = async (query) => {

        if(query.length > 0) { 
            const results = await autocompleteSearch(query);

            if(results.error) {
                enqueueSnackbar(results.error, {variant: "error", preventDuplicate: true})
                setError(results.error);
            }
            setAutocompleteResult(results);
        }
    }

    console.log(autocompleteResult);

    return (
      <div className="page">
            <TextField
              variant="filled"  
              label="City"
              className="search"
              onChange={(e)=>handleChange(e.target.value)}
            />
            <div className="weather-info">
                <div className="info-top">
                  <div className="current-city">
                      <div className="icon-demo">
                      </div>
                      <div className="current-city-info">
                          <span>{`${'Tel Aviv'}`}</span>
                          <span>{`${'32c'}`}</span>
                      </div>
                  </div>
                  <div className="favourite-toggle">
                      Favourite
                  </div>
                </div>
                <div className="info-bottom">
                    <ForecastItem 
                        data={{
                            day: "Mon",
                            temp: "36c"
                        }}
                    />
                    <ForecastItem 
                        data={{
                            day: "Mon",
                            temp: "36c"
                        }}
                    />
                    <ForecastItem 
                        data={{
                            day: "Mon",
                            temp: "36c"
                        }}
                    />
                    <ForecastItem 
                        data={{
                            day: "Mon",
                            temp: "36c"
                        }}
                    />
                    <ForecastItem 
                        data={{
                            day: "Mon",
                            temp: "36c"
                        }}
                    />                
                </div>
            </div>
      </div>
    );
}

export default WeatherInfo;
