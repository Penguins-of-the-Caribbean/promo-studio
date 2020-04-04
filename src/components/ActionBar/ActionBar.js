import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import './ActionBar.css';
import '../../Theme/Theme.css';

export default function ActionBar(props) {
    return (
        <div className="card action-bar">
            <input className="action-bar-search" type="text" placeholder="Search"/>
            <NavLink className="action-bar-create-btn" to={props.link}>
                <i className="fas fa-plus-square fa-lg purple-txt"></i>
            </NavLink>
        </div>
    )
}
