import { useDispatch, useSelector } from "react-redux";
import favouritesSlice from '../state/favouritesSlice';

const useFavourite = () => {

    const dispatch = useDispatch();
    const { city, key, weatherText, weatherIcon, temp } = useSelector((state) => state.weather);
    const { favourites } = useSelector((state) => state.favourites);

    const { 
        addToFavourites,
        removeFromFavourites
    } = favouritesSlice.actions;

    const isFavorite = favourites.some((favorite) => key === favorite.key);

    const handleFavourite = () => {
        if(isFavorite) {
            dispatch(removeFromFavourites(key))
        } else {
            dispatch(addToFavourites({ key, city, weatherText, weatherIcon, temp }))
        }
    }

    return { handleFavourite, isFavorite }

}

export default useFavourite;