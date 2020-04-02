import React from 'react';
import Card from '../Card/Card'
import './Board.css'
import '../../Theme/Theme.css'

export default function Board(props) {
    return (
        <div className="board">
            <div className="board-wrapper">
                <div className="promo-calendar-placeholder">
                    PROMO CALENDAR
                </div>
                <div className="grid-container">
                    {props.offers}
                    {props.experiences}
                    {props.terms}
                    {props.components}
                    {props.markets}
                    {props.ports}
                    {props.ships}
                    {props.users}
                </div> 
            </div>
        </div>
    )
}
