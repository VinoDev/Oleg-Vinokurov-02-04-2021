import './app.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';  

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
