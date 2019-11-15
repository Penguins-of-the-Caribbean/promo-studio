import React from 'react';
import './component-selector.css';
import { NavLink } from 'react-router-dom';

export default function index() {
    return (
        <div className='ge_component-selector'>
            <div className='ge_component-selector-close'>
                <NavLink className='ge_component-selector-close-x' to='/'>X</NavLink>
            </div>
        </div>
    )
}
