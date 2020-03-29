import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <NavLink to="/logout">Log out</NavLink>
        </div>
    )
}
