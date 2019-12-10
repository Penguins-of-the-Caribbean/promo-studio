import React from 'react';
import {NavLink} from 'react-router-dom';
import './component-builder.css';
import {HeroBanner, CountDown, Pills, Submit} from '../Components/';

export default function index(props) {
    return (
        <div className='ge_component-builder-container'>
            {props.data.heroBanner === true ? <HeroBanner {...props}/> : null}
            {props.data.countDown === true ? <CountDown {...props} /> : null}
            {props.data.pills === true ? <Pills {...props} /> : null}
            {props.data.peopleWatching === true ? <div>People Watchig</div> : null}
            {props.data.exitPopup === true ? <div>Exit Popup</div> : null}
            {props.data.ksf === true ? <div>Kids Sail Free</div> : null}
            {props.data.promoCode === true ? <div>Promo Code</div> : null}
            {props.data.iobd === true ? <div>IOBD</div> : null}
            <Submit>
                <NavLink className='ge_generate-code-btn' to='/code'>generate code</NavLink>
            </Submit>
        </div>
    )
}
