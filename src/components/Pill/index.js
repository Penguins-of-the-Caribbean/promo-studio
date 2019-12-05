import React from 'react';
import './pill.css';

export default function index(props) {

    return (
        <div className='ge_pill-container'>
            <div className="ge_pill" style={{background:props.bgColor}}>
                {props.text}
            </div>
        </div>
    )
}
