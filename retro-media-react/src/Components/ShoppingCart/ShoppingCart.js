import React from 'react';
import './ShoppingCart.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCart = ({cart, toggleCartVisibility}) => {

    return (
        <div id='shopping-cart-icon' onClick={() => toggleCartVisibility()}>
            <p>Cart ({cart.length})</p>
            <ShoppingCartIcon className="ShoppingCartIcon" style={{ color: "#fff", hover: '#ff0000', fontSize: '3rem' }} />
        </div>
    )
}

export default ShoppingCart;