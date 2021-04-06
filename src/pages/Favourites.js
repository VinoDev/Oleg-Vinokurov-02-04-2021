import './favourites.css'
import { useSelector } from "react-redux";
import useLoadFavorite from '../hooks/useLoadFavorite.js';

const Favourites = ({history}) => {

    const { favourites } = useSelector((state) => state.favourites);
    const { loadFavorite } = useLoadFavorite();

    if(favourites.length > 0) {
        return (
            <div className="favourites">
                {
                    favourites.map((favorite) => {
                        return (
                            <div 
                                className="favorite-item" 
                                key={favorite.key} 
                                onClick={()=>loadFavorite(
                                    {key: favorite.key, city: favorite.city}, 
                                    history
                                )}
                            >
                                
                                <span className="favorite-city">{favorite.city}</span>
                                <span>{`${favorite.temp} °C`}</span>
                                <span>{favorite.weatherText}</span>
                            </div>
                        )
                    })
                }
            </div>
        );
    } else {
        return (
            <div className="no-data-msg">
                You have no favorite location saved.
            </div>
        )
    }
}

export default Favourites;
