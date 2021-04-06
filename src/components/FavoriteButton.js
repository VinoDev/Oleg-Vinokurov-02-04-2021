import './favoriteButton.css'
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector } from "react-redux";
import useFavorite from '../hooks/useFavourite.js';

const FavoriteButton = () => {

    const { handleFavourite, isFavorite } = useFavorite();

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