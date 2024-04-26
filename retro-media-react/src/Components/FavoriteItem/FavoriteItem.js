import React from 'react';
import "./FavoriteItem.css";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const FavoriteItem = ({item, addToCart, toggleFavoriteItem}) => {

        return (
            <div className="item-container">
                <Link component="button" item={item} style={{top: "0"}}><strong>{item.title} ({item.type})</strong></Link><StarOutlineIcon onClick={() => {toggleFavoriteItem(item)}}/>
                <Button variant="contained" onClick={() => addToCart(item)} style={{flex: "1 1"}}>Add to Cart</Button>
            </div>
    );
};

export default FavoriteItem;