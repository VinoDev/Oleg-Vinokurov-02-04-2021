import './app.css';
import Navbar from './components/Navbar.js';
import WeatherInfo from './components/WeatherInfo.js';  

function App() {
  return (
    <div className="app">
      <Navbar/>
      <WeatherInfo/>
    </div>
  );
}

export default App;
