import './weather-info.css';
import { TextField } from "@material-ui/core";
import ForecastItem from './ForecastItem.js';

function WeatherInfo() {
  return (
    <div className="page">
        <TextField
          variant="filled"  
          label="City"
          className="search"
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
