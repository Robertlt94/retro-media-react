import React from "react";
import "./FavoritesList.css";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

const FavoritesList = ({userFavorites, toggleFavoriteItem, addToCart}) => {

    return(
        <div id="media-list-container">
            {userFavorites.map(item => {
                return(
                    <FavoriteItem key={item.id} item={item} toggleFavoriteItem={toggleFavoriteItem} addToCart={addToCart} />
                )
            })}
        </ div>
    );
}

export default FavoritesList;