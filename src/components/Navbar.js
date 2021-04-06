import './navbar.css';
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';

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
