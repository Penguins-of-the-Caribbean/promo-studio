import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';

import './Navbar.css';
import '../../Theme/Theme.css';

const classes = {
    logout: "link purple-txt capitalize fnt-m bld-l"
}

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <NavLink className={classes.logout} to="/logout">log out</NavLink>
            </div>
        </div>
    )
}
