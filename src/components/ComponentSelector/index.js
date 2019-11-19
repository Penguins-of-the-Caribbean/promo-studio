import React from 'react';
import './component-selector.css';
import { NavLink } from 'react-router-dom';
import Button from '../Button';


export default function index(props) {
    console.log(props);
    return (
        <div className="ge_component-selector-container">
            <div className='ge_component-selector'>
                <div className='ge_component-selector-close'>
                    <NavLink className='ge_component-selector-close-x' to='/'>X</NavLink>
                </div>
                <div>
                    {props.children}
                </div>
                <div className="ge_submit-button">
                    <Button click={()=>console.log('button click')}>
                        create experience
                    </Button>
                </div>
            </div>
        </div>
    )
}
