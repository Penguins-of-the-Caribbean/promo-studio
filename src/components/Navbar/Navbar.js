import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/logout">Log out</NavLink>
        </div>
    )
}
