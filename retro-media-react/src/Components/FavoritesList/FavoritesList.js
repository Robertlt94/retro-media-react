import React from "react";
import "./FavoritesList.css";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

const FavoritesList = ({favorites, toggleFavoriteItem, addToCart}) => {

    return(
        <div id="favorites-list-container">
            <h1>Your Favorites:</h1>
            <div id="overflow-div">
                {favorites.map(item => {
                    return(
                        <FavoriteItem key={item.id} item={item} toggleFavoriteItem={toggleFavoriteItem} addToCart={addToCart} />
                    )
                })}
            </div>
        </ div>
    );
}

export default FavoritesList;