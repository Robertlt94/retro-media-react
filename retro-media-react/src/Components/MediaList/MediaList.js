import React from "react";
import "./MediaList.css";
import MediaItem from "../MediaItem/MediaItem";
import FavoritesList from "../FavoritesList/FavoritesList";

const MediaList = ({inventory, favorites, addToCart, toggleFavoriteItem}) => {

    return(
        <div id="main-container">
            {/* {favorites.length > 0 ? <FavoritesList favorites={favorites} toggleFavoriteItem={toggleFavoriteItem} addToCart={addToCart}/> : <></>} */}
            {favorites.length > 0 && <FavoritesList favorites={favorites} toggleFavoriteItem={toggleFavoriteItem} addToCart={addToCart}/>}
            <div>
                <h1>Available Media:</h1>
                <div id="media-list-container">
                    {inventory.map(item => {
                        return(
                            <MediaItem key={item.id} item={item} addToCart={addToCart} favorites={favorites} toggleFavoriteItem={toggleFavoriteItem}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default MediaList;