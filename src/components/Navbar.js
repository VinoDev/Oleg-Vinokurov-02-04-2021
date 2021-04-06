import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className="navbar">
        <span className="brand">Weather</span>
        <div className="nav-links">
          <NavLink to="/" activeClassName="active-link">Home</NavLink>
          <NavLink to="/favourites" activeClassName="active-link">Favourites</NavLink>
        </div>
      </div>
  );
}

export default Navbar;
