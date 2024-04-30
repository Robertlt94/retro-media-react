import React from "react";
import "./MediaList.css";
import MediaItem from "../MediaItem/MediaItem";

const MediaList = ({inventory, favorites, addToCart, toggleFavoriteItem}) => {

    return(
        <div id="media-list-container">
            {inventory.map(item => {
                return(
                    <MediaItem key={item.id} item={item} addToCart={addToCart} favorites={favorites} toggleFavoriteItem={toggleFavoriteItem}/>
                )
            })}
        </ div>
    );
}

export default MediaList;