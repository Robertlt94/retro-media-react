import React from 'react';
import './Header.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart'

function Header(cart, cartQuantity) {

    return (
        <header id="header">
            <h1>Retro media</h1>
            <ShoppingCart cart={cart} cartQuantity={cartQuantity}/>
        </header>
    );
};

export default Header;