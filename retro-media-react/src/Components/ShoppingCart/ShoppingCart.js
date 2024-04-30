import React, {useState} from 'react';
import './ShoppingCart.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCart = (cart, cartQuantity) => {

    const toggleCartVisibility = () => {
        console.log(cart);
    }

    return (
        <button onClick={toggleCartVisibility}>
                <p>Cart</p>
                <ShoppingCartIcon style={{ fontSize: '5rem' }}/>
                {/* <div>
                    {cartQuantity}
                </div> */}
        </button>
    )
}

export default ShoppingCart;