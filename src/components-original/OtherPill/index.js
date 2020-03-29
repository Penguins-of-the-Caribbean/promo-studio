import React from 'react';
import './other-pill.css'

export default function index(props) {
    return (
        <div className='ge_other-pills'>
            <div className='ge_other-pill-param'>
                <label>Pill:</label>
                <p>{props.pill}</p>
            </div>
            <button onClick={()=> props.delete(props.key)}>Delete</button>
        </div>
    )
}
