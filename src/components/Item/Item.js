import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import './Item.css';
import '../../Theme/Theme.css'

export default function Item(props) {

    const {name, id, status, author, dateCreated, dateModified, edit, link} = props;

    console.log(id);

    function setStatusColor(){
        if(status === 'active'){
            return 'green-txt'
        }else if(status === 'draft'){
            return 'orange-txt';
        }else{
            return 'dark-gray-txt';
        }
    }

    return (
        <div className="item-container">

            <div className="item-actions-container">
                <NavLink to={`/${link}/${id}`}>{edit}</NavLink>
            </div>

            <div className="item-details-container">
                <h1 className="header bld-m fnt-l capitalize dark-gray-txt">{name}</h1>
            </div>

            <div className="item-details-container">
                <p className="para fnt-m light-gray-txt">{author}</p>
                <p className="para fnt-m light-gray-txt">{dateCreated}</p>
                <p className="para fnt-m light-gray-txt">{dateModified}</p>
            </div>

            <div className="item-status-container">
                <i className={`fas fa-circle fa-xs ${setStatusColor()}`}></i>
                <p className={`capitalize fnt-m bld-l ${setStatusColor()}`}>{status}</p>
            </div>

        </div>
    )
}
