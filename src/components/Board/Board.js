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
                <div className="envelope-even">
                    OFFER AND EXPERIENCES CARDS
                    {props.offers}
                    {props.experiences}
                </div>
                <div className="envelope-even">
                    TERMS AND COMPONENTS CARDS
                    {props.terms}
                    {props.components}
                </div>
                <div className="envelope-even">
                    MARKETS, PORTS, AND SHIPS CARDS
                    {props.markets}
                    {props.ports}
                    {props.ships}
                </div>
                <div className="envelope-even">
                    USER CARDS
                    {props.users}
                </div>   
            </div>
        </div>
    )
}
