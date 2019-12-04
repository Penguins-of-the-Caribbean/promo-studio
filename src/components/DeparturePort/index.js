import React from 'react';
import './departure-port.css';

export default function index(props) {
    return (
        <div className='ge_departure-port-stamp'>
            <p>{props.key}</p>
            <h5>Port: {props.port}</h5>
            <button onClick={()=> props.delete(props.key)}>Delete</button>
        </div>
    )
}
