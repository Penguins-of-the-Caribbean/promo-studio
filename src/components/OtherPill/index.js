import React from 'react';
import './other-pill.css'

export default function index(props) {
    return (
        <div className='ge_other-pills'>
            <h5>Pill: {props.pill}</h5>
            <button onClick={()=> props.delete(props.key)}>Delete</button>
        </div>
    )
}
