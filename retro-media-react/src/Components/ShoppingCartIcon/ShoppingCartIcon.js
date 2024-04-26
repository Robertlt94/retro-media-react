import React, {useState} from 'react';
import './ShoppingCartIcon.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCart = (cart) => {

    const toggleCartVisibility = () => {
        console.log(cart);
    }

    return (
        <button onClick={toggleCartVisibility}>
                <p>Cart</p><ShoppingCartIcon style={{ fontSize: '5rem' }}/>
        </button>
    )
}

export default ShoppingCart;