import React from 'react';
import './component-builder.css';
import {HeroBanner, CountDown} from '../Components/';

export default function index(props) {
    return (
        <div className='ge_component-builder-container'>
            {props.data.heroBanner === true ? <HeroBanner/> : null}
            {props.data.countDown === true ? <CountDown/> : null}
            {props.data.pills === true ? <div>Pills</div> : null}
            {props.data.peopleWatching === true ? <div>People Watchig</div> : null}
            {props.data.exitPopup === true ? <div>Exit Popup</div> : null}
            {props.data.ksf === true ? <div>Kids Sail Free</div> : null}
            {props.data.promoCode === true ? <div>Promo Code</div> : null}
            {props.data.iobd === true ? <div>IOBD</div> : null}
        </div>
    )
}
