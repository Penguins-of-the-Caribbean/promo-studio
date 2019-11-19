import React from 'react';
import './button.css';

export default function index(props) {
    return (
        <button className='ge_button' onClick={props.click} >
            {props.children}
        </button>
    )
}
