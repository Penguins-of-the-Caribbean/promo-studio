import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import '../../Theme/Theme.css'

export default function Item(props) {



    return (
        <div className="item">

            <div className="envelope-even">
                <h1 className="">{props.name}</h1>
                <p>{props.status}</p>
            </div>

            <div className=".envelope-even">
                <p>{props.author}</p>
                <p>{props.dateCreated}</p>
                <p>{props.dateModified}</p>
            </div>

            <div className=".envelope-even">
                {props.edit}
                {props.delete}
            </div>

        </div>
    )
}
