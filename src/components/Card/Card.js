import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import '../../Theme/Theme.css'

export default function Card(props) {

    return (
        <div className='card card-m'>
           <div className="envelope-between">
                <h1 className="header fnt-xl">{props.header}</h1>
                <NavLink className="dark-gray-txt btn-round" to={props.link} >{props.menu}</NavLink>
           </div>
            <div className="envelope-between">
                <div className="purple-bg avatar">
                    {props.icon}
                </div>
                <div className="envelope-right-col">
                    <p className="para fnt-xxl bld-xl" >{props.stat}</p>
                    <p className="para fnt-m" >{props.label}</p>
                </div>
            </div>
        </div>
    )
}
