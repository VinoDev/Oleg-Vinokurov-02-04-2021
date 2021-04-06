import './app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';  
import Favourites from './pages/Favourites.js';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/favourites" exact={true} component={Favourites}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
