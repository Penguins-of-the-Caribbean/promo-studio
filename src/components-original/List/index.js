import React from 'react';
import './list.css';

export default function index(props) {
    return (
        <div className='ge_list'>
            {props.children}
        </div>
    )
}
