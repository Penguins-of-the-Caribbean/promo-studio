import React from 'react';
import './experience-component.css'

export default function index(props) {
    return (
        <div className='ge_experience-component'>
            {props.children}
            <input type='checkbox' onChange={props.check}></input>
        </div>
    )
}
