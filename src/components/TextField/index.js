import React from 'react';
import './text-field.css';

export default function index(props) {
    return (
        <div className='ge_text-field-component-container'>
           <div>
                <p>{props.textField.text.text}</p>
                <p>{props.textField.text.textSize}</p>
                <p>{props.textField.text.textAlign}</p>
           </div> 
           {props.textField.subText !== undefined ? 
            <div>
                <p>{props.textField.subText.text}</p>
                <p>{props.textField.subText.textSize}</p>
                <p>{props.textField.subText.textAlign}</p>
            </div> 
           : null}
           <button onClick={()=> props.delete()}>Delete</button>
        </div>
    )
}
