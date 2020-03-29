import React from 'react'
import './navbar.css';

export default function index(props) {
    return (
        <div className="ge_promo-studio-navbar">
            <h1>Promo <img src='/imgs/logo/bullhorn.png' alt='Logo'></img> Studio</h1>
            <div className='ge_promo-studio-links'>{props.children}</div>
        </div>
    )
}
