import react, {useState} from 'react';
import "./MediaItem.css";

const MediaItem = ({key, item, addToCart}) => {

        return (
            <div className="item-container">
                <strong key={key} >{item.title} ({item.type})</strong>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
    );
};

export default MediaItem;