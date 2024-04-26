import React from 'react';
import "./MediaItem.css";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

const MediaItem = ({item, userFavorites, addToCart, toggleFavoriteItem}) => {

        return (
            <div className="item-container">
                <Link component="button" item={item} style={{top: "0"}}><strong>{item.title} ({item.type})</strong></Link>
                <StarIcon style={{color: "red"}} onClick={() => {toggleFavoriteItem(item)}}/>
                {console.log('hello world')}
                {/* {userFavorites.includes(item) ?
                    <StarIcon onClick={() => {toggleFavoriteItem(item)}}/>
                    :
                    <StarOutlineIcon onClick={() => {toggleFavoriteItem(item)}}/>} */}
                <Button variant="contained" onClick={() => addToCart(item)} style={{top: "0"}}>Add to Cart</Button>
            </div>
    );
};

export default MediaItem;