import React from 'react';
import './Header.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const Header = ({cart, cartCount}) => {

    return (
        <header id="header">
            <h1>Retro media<span>Your local source for media. CDs, VHS, DVDs, we have it all!</span></h1>
            <ShoppingCart cart={cart} cartCount={cartCount} />
        </header>
    );
};

export default Header;