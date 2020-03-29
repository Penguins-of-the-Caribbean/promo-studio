import React from 'react';
import './taskbar.css';

export default function index(props) {
    return (
        <div className='ge_taskbar'>
            {props.children}
        </div>
    )
}
