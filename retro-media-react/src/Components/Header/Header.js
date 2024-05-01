import React from 'react';
import './Header.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import CartContent from '../CartContent/CartContent';

const Header = ({cart, toggleCartVisibility, removeFromCart}) => {

    return (
        <header id="header">
            <h1>Retro media<span>Your local source for media. CDs, VHS, DVDs, we have it all!</span></h1>
            <ShoppingCart cart={cart} toggleCartVisibility={toggleCartVisibility}/>
            <CartContent cart={cart} removeFromCart={removeFromCart} toggleCartVisibility={toggleCartVisibility} />
        </header>
    );
};

export default Header;