import React from 'react';
import {Route, Redirect } from 'react-router-dom';

export default function index({ component: Component, auth, ...props }) {
    return (
        <Route
            {...props}
            render={innerProps =>
                auth.isAuth ? <Component {...innerProps} /> : <Redirect to="/" />
            }
        />
    )
}
