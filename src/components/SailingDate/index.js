import React from 'react';
import './sailing-date.css';

export default function index(props) {
    return (
        <div className='ge_sailing-date-stamp'>
            <h5>Sailing Date</h5>
            <div>
                <div>Start Date: {props.startDate}</div>
                <div>End Date: {props.endDate}</div>
            </div>
            <button onClick={()=> props.delete(props.key, props.target, props.dataType)}>Delete</button>
        </div>
    )
}
