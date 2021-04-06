import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';  
import Favourites from './pages/Favourites.js';
import { useEffect } from 'react';
import useErrorHandler from './hooks/useErrorHandler.js';
import useGetWeatherAndForecast from './hooks/useGetWeatherAndForecast.js';

const App = () => {

  const { getWeatherAndForecast } = useGetWeatherAndForecast();
  const { showErrorMessage, error } = useErrorHandler()
  
  useEffect(()=>{
    const initCity = {key: "215854", city: "Tel Aviv"}
    getWeatherAndForecast(initCity)
  }, [])   

  useEffect(()=>{
    error && showErrorMessage(error)
  }, [error])

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <Route path="/Oleg-Vinokurov-02-04-2021" exact={true} component={Home}/>
        <Route path="/favourites" exact={true} component={Favourites}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
