import './favourites.css'
import { useSelector } from "react-redux";

const Favourites = () => {

    const { favourites } = useSelector((state) => state.favourites);

    if(favourites.length > 0) {
        return (
            <div className="favourites">
                {
                    favourites.map((favorite) => {
                        return (
                            <div className="favorite-item" key={favorite.key}>
                                <span>{favorite.city}</span>
                                <span>{favorite.temp}</span>
                                <span>{favorite.weatherText}</span>
                                {/* <span>{favorite.weatherIcon}</span> */}
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
