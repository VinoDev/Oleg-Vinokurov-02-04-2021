import './favoriteButton.css'
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch, useSelector } from "react-redux";
import favouritesSlice from '../state/favouritesSlice';

const FavoriteButton = () => {

    const dispatch = useDispatch();
    const { city, key } = useSelector((state) => state.weather);
    const { favourites } = useSelector((state) => state.favourites);
    const { 
        addToFavourites,
        removeFromFavourites
    } = favouritesSlice.actions;

    const isFavorite = favourites.some((favoriteKey) => key === favoriteKey);

    const handleFavourite = () => {
        if(isFavorite) {
            dispatch(removeFromFavourites(key))
        } else {
            dispatch(addToFavourites(key))
        }
    }
    
    return (
        <div className="favorite-toggle">
            <IconButton onClick={handleFavourite}>
                {
                    isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>
                }
            </IconButton>
        </div>    
    )
}

export default FavoriteButton