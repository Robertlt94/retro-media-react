import React from 'react';
import './Header.css';
import ShoppingCartIcon from '../ShoppingCartIcon/ShoppingCartIcon'

function Header(cart) {

    return (
        <header id="header">
            <h1>Retro media</h1>
            <ShoppingCartIcon cart={cart} />
        </header>
    );
};

export default Header;