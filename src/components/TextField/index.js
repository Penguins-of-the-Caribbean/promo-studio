import React from 'react';
import './text-field.css';

export default function index(props) {
    return (
        <div className='ge_text-field-component-container'>
           <div>
            <div className='ge_text-field-container'>
                    <p>Text: {props.textField.text.text}</p>
                    <div className='ge_text-field-props'>
                        <ul>
                            <li>
                                <p>Font-size:</p>
                                <p>{props.textField.text.textSize} px</p>
                            </li>
                            <li>
                                <p>Text-alignment:</p>
                                <p>{props.textField.text.textAlign}</p>
                            </li>
                        </ul>
                    </div>
            </div> 
            {props.textField.subText.text !== '' ? 
                <div className='ge_subtext-field-container'>
                    <p>Subtext: {props.textField.subText.text}</p>
                    <div className='ge_text-field-props'>
                        <ul>
                            <li>
                                <p>Font-size:</p>
                                <p>{props.textField.subText.textSize} px</p>
                            </li>
                            <li>
                                <p>Text-alignment:</p>
                                <p>{props.textField.subText.textAlign}</p>
                            </li>
                        </ul>
                    </div>
                </div> 
            : null}
           </div>
           <button onClick={()=> props.delete(props.index)}>Delete</button>
        </div>
    )
}
