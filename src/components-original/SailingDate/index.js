import React from 'react';
import './sailing-date.css';

export default function index(props) {
    return (
        <div className='ge_sailing-date-stamp'>
            <div className='ge_sailing-date'>
                <div className='ge_sailing-param'>
                    <label>From:</label>
                    <p>{props.startDate}</p>
                </div>
                <div className='ge_sailing-param'>
                    <label>To:</label>
                    <p>{props.endDate}</p>
                </div>
            </div>
            <button onClick={()=> props.delete(props.key, props.target, props.dataType)}>Delete</button>
        </div>
    )
}
