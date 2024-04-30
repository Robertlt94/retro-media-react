import React from 'react';
import "./FavoriteItem.css";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';

const FavoriteItem = ({item, addToCart, toggleFavoriteItem}) => {

        return (
            <div className="fav-item-container">
                <div id='fav-image'>
                    <img src={item.image} />
                </div>
                <Link component="button" item={item} style={{top: "0", fontSize: "20px", marginLeft: "auto", marginRight: "auto"}}><strong>{item.title} ({item.type})</strong></Link>
                <div id="fav-content">
                    <StarIcon style={{cursor: "pointer", color: "red", fontSize: "20px"}} onClick={() => {toggleFavoriteItem(item)}} />
                    <p>Favorite</p>
                </div>
                <Button variant="contained" onClick={() => addToCart(item)} style={{bottom: "0", display: "absolute"}}>Add to Cart</Button>
            </div>
    );
};

export default FavoriteItem;