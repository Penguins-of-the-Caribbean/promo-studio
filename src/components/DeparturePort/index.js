import React from 'react';
import './departure-port.css';

export default function index(props) {
    return (
        <div className='ge_departure-port-stamp'>
            <div className='ge_port-param'>
                <label>Port of:</label>
                <p>{props.port}</p>
            </div>
            <button onClick={()=> props.delete(props.dataType, props.portType, props.key)}>Delete</button>
        </div>
    )
}
