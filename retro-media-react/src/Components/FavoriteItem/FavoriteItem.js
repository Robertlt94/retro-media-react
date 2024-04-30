import React from 'react';
import "./FavoriteItem.css";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';

const FavoriteItem = ({item, addToCart, toggleFavoriteItem}) => {

        return (
            <div class="fav-item-container">
                <div class='fav-image'>
                    <img src={item.image} />
                </div>
                <Link component="button" item={item} className="Link" style={{top: "0", fontSize: "20px", marginLeft: "auto", marginRight: "auto"}}><strong>{item.title} ({item.type})</strong></Link>
                <div class="fav-content">
                    <StarIcon style={{cursor: "pointer", color: "red", fontSize: "30px"}} onClick={() => {toggleFavoriteItem(item)}} />
                    <p>Favorite</p>
                </div>
                <Button variant="contained" style={{marginTop: "1vh"}} onClick={() => addToCart(item)}>Add to Cart</Button>
            </div>
    );
};

export default FavoriteItem;