import React from 'react';
import './Banner.css';

const Banner = ({message}) => {

    return (
        <div id="message-container">
            <p>{message}</p>
        </div>
    )
}

export default Banner;