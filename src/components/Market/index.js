import React from 'react';
import './market.css';

export default function index(props) {
    return (    
        <div className='ge_markets'>
            <div className='ge_market-name'>
                {props.name}
            </div>
            <div className='ge_promo-offers'>

            </div>
        </div>
    )
}
