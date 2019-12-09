import React from 'react';
import './pill.css';

export default function index(props) {

    return (
        <div className='ge_pill-container'>
            <div className="ge_pill" style={{background:props.bgColor}}>
                {props.text}
            </div>
            <div className='ge_pill-controls'>
                <button onClick={(e)=> props.edit(props.index)}>edit</button>
                <button onClick={(e)=> props.delete(props.index)}>delete</button>
            </div>
        </div>
    )
}
