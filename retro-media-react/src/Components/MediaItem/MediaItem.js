import React from 'react';
import "./MediaItem.css";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

const MediaItem = ({item, favorites, addToCart, toggleFavoriteItem}) => {

        return (
            // <div className="item-container">
            //     <Link component="button" item={item} style={{top: "0"}}><strong>{item.title} ({item.type})</strong></Link>
            //     {favorites.some(favorite => favorite.id === item.id) ?
            //         (<StarIcon style={{color: "red", cursor: "pointer", fontSize: "2rem"}}onClick={() => {toggleFavoriteItem(item)}}/>)
            //         :
            //         (<StarOutlineIcon style={{cursor: "pointer"}} onClick={() => {toggleFavoriteItem(item)}}/>)}
            //     <Button variant="contained" onClick={() => addToCart(item)} style={{top: "0"}}>Add to Cart</Button>
            // </div>
            <div class="item-container">
                <div class='item-image'>
                    <img src={item.image} />
                </div>
                <Link component="button" item={item} className="Link" style={{cursor: "pointer", top: "0", fontSize: "20px", marginLeft: "auto", marginRight: "auto"}}><strong>{item.title} ({item.type})</strong></Link>
                <div class="item-content">
                    {favorites.some(favorite => favorite.id === item.id) ? (<StarIcon style={{color: "red", cursor: "pointer", fontSize: "2rem"}}onClick={() => {toggleFavoriteItem(item)}}/>) : (<StarOutlineIcon style={{cursor: "pointer", color: "#fff", fontSize: "2rem"}} onClick={() => {toggleFavoriteItem(item)}}/>)}
                    <p>Favorite</p>
                </div>
                <Button variant="contained" style={{cursor: "pointer", marginTop: "2vh"}} onClick={() => addToCart(item)}>Add to Cart</Button>
            </div>
    );
};

export default MediaItem;