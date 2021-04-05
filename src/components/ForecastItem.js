import './forecast-item.css';


const ForecastItem = ({data}) => {
  console.log(data);
  return (
    <div className="forecast-item">
        <span>
            {data.day}
        </span>
        <span>
            {data.maxTemp+"°C"}
        </span>
        <span>
            {data.minTemp+"°C"}
        </span>
    </div>
  );
}

export default ForecastItem;
