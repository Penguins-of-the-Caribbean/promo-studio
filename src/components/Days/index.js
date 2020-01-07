import React from 'react';
import './days.css';

export default function index(props) {
    let styles = {
        background: props.dayName === 'Sat' || props.dayName === 'Sun' ? 'tomato' : 'palevioletred',
    }
    return (
        <div className='ge_pc-days' style={styles}>
            <div className='ge_pc-day-name'>
                {props.dayName}
            </div>
            <div className='ge_pc-day-number'>
                {props.dayNumber}
            </div>
        </div>
    )
}
