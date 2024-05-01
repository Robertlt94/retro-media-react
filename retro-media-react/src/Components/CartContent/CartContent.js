import React from 'react';
import './CartContent.css';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const CartContent = ({cart, removeFromCart, toggleCartVisibility}) => {

    return (
        <div id="shopping-cart-container">
            <div id="shopping-cart-header">
                <div id="close-cart-icon" onClick={() => toggleCartVisibility()}>
                    <p>Close</p>
                    <CloseIcon style={{fontSize: "2rem"}} ></CloseIcon>
                </div>
                <p>You have {cart.length} items in your cart</p>
            </div>
            {cart.map((item, index) => {
                return (
                    <div id="cart-item-container" key={index}>
                        <img src={item.image} />
                        <p>{item.title} ({item.type})</p>
                        <Button variant="contained" onClick={() => removeFromCart(item, index)} >Remove</Button>
                    </div>
                )
            })}
        </div>
    );
};

export default CartContent;