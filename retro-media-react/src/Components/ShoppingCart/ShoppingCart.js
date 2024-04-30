import React from 'react';
import './ShoppingCart.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCart = ({cart, cartCount}) => {

    const toggleCartVisibility = () => {
        console.log(cart);
    }

    // const cartCheck = (cartQuantity) => {
    //     // if(cartQuantity >= 0){
    //         return number
    //     // }
    // }

    return (
        <button id='shopping-cart-icon' onClick={toggleCartVisibility}>
            {/* {cartCheck} */}
            <p>Cart ({cartCount})</p>
            <ShoppingCartIcon className="ShoppingCartIcon" style={{ color: "#fff", hover: '#ff0000', fontSize: '3rem' }}/>
        </button>
    )
}

export default ShoppingCart;