import React from 'react';
import './view.css'

export default function index(props) {
    console.log(props);
    return (
        < div className='ge_promo-studio-view'>
            {props.children}
        </div>
    )
}
