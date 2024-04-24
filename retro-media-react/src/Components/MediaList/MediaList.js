import React from "react";
import "./MediaList.css";
import MediaItem from "../MediaItem/MediaItem";

const MediaList = ({list, addToCart}) => {

    return(
        <div id="media-list-container">
            {list.map(item => {
                return(
                    <MediaItem key={item.id} item={item} addToCart={addToCart} />
                )
            })}
        </ div>
    );
}

export default MediaList;