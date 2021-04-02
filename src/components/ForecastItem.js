import './forecast-item.css';


function ForecastItem({data}) {
  return (
    <div className="forecast-item">
        <span>
            {data.day}
        </span>
        <span>
            {data.temp}
        </span>
    </div>
  );
}

export default ForecastItem;
