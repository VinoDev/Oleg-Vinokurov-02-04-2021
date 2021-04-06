import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';  
import Favourites from './pages/Favourites.js';
import { useEffect } from 'react';
import useErrorHandler from './hooks/useErrorHandler.js'

const App = () => {

  const { showErrorMessage, error } = useErrorHandler()
  
  useEffect(()=>{
    error && showErrorMessage(error)
  }, [error])

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/favourites" exact={true} component={Favourites}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
