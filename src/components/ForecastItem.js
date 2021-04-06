import './forecast-item.css';


const ForecastItem = ({data}) => {

  return (
    <div className="forecast-item">
        <span className="forecast-day">
            {data.day}
        </span>
        <span>
            {data.maxTemp+"°C"}
        </span>
        <span className="min-temp">
            {data.minTemp+"°C"}
        </span>
    </div>
  );
}

export default ForecastItem;
