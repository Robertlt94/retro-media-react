import React, {useState} from "react";
import "./MediaList.css";
import MediaItem from "../MediaItem/MediaItem";

function MediaList(list, action) {

    return(
        <div id="media-list-container">
            <MediaItem />
        </div>
    );
};

export default MediaList;