import React, {useState} from 'react';
import './ComponentStyles/hero-banner.css';
import './ComponentStyles/count-down.css';
import Button from '../Button/';

function HeroBanner(props) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='ge_hero-banner-container'>
            <h1>Hero Banner</h1>
            <form>
                <label>Parent element</label>
                <input 
                    type="text" 
                    id="hb_parent" 
                    onChange={(e)=>props.hb_setState(e)}
                    required
                />
                <label>Header text</label>
                <input 
                    type="text" 
                    id="hb_header" 
                    onChange={(e)=>props.hb_setState(e)}
                    required
                />
                <label>Subtext</label>
                <input 
                    type="text" 
                    id="hb_subtext" 
                    onChange={(e)=>props.hb_setState(e)}
                    required
                />
                <label>Text alignment</label>
                <select id="hb_textAlignment" onChange={(e)=>props.hb_setState(e)} required >
                    <option value="center">center(Default)</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>
                <label>Add desktop image</label>
                <input 
                    type="url" 
                    id="hb_desktopImage" 
                    onChange={(e)=>props.hb_setState(e)}
                    required
                />
                <label>Add mobile image</label>
                <input 
                    type="url" 
                    id="hb_mobileImage"
                    onChange={(e)=>props.hb_setState(e)}
                />
                <div className='ge_hb-drop-shadow-widget'>
                    <label>Add Shadow</label>
                    <input 
                        type="checkbox" 
                        onChange={(e)=>setToggle(e.target.checked)}
                    />
                    {
                        toggle === true ? 
                        <div className="ge_hb-drop-shadow-widget-container">
                            <h3>Shadow Editor</h3>
                            <label>Horizontal Shift</label>
                            <input 
                                type="range" 
                                min="-10" 
                                max="10" 
                                step="1" 
                                id="hb_hShift" 
                                onChange={(e)=>props.hb_setState(e)}
                            />
                            <label>Vertical Shift</label>
                            <input 
                                type="range" 
                                min="-10" 
                                max="10" 
                                step="1" 
                                id="hb_vShift" 
                                onChange={(e)=>props.hb_setState(e)}
                            />
                            <label>Blur Offset</label>
                            <input 
                                type="range" 
                                min="-10" 
                                max="10" 
                                step="1" 
                                id="hb_blur"   
                                onChange={(e)=>props.hb_setState(e)}
                            />
                            <label>Color</label>
                            <input 
                                type="color" 
                                id="hb_color" 
                                onChange={(e)=>props.hb_setState(e)}
                            />
                        </div> : null
                    }
                </div>
            </form>
        </div>
    )
}

function CountDown(props) {
    return (
        <div className='ge_count-down-container'>
            <h1>Count Down</h1>
            <div className='ge_count-down-form'>
                <label>Parent Element</label>
                <input 
                    type="text" 
                    id="cd_parent" 
                    onChange={(e)=>props.cd_setState(e)} 
                    required
                />
                <label>Count-down Start Date:</label>
                <input 
                    type="date" 
                    id="cd_startDate" 
                    onChange={(e)=>props.cd_setState(e)}
                />
                <label>Count-down Start Time:</label>
                <input 
                    type="time" 
                    id="cd_startTime" 
                    onChange={(e)=>props.cd_setState(e)}
                />
                <label>Count-down End Date:</label>
                <input 
                    type="date" 
                    id="cd_endDate" 
                    onChange={(e)=>props.cd_setState(e)}
                />
                <label>Count-down Time:</label>
                <input 
                    type="time" 
                    id="cd_endTime" 
                    onChange={(e)=>props.cd_setState(e)}
                />
                <div className="ge_count-down-offer">
                    <label>Offer</label>
                    <input 
                        type="text" 
                        id="cd_offer"
                        onChange={(e)=>props.cd_setState(e)}
                    />
                    <label>Text</label>
                    <input 
                        type="text" 
                        id="cd_text" 
                        onChange={(e)=>props.cd_setState(e)}
                    />
                    <label>Subtext</label>
                    <input 
                        type="text" 
                        id="cd_subText" 
                        onChange={(e)=>props.cd_setState(e)}
                    />
                    <label>Timer Text</label>
                    <input 
                        type="text" 
                        id="cd_timerText" 
                        onChange={(e)=>props.cd_setState(e)}
                    />
                </div>
                <div className="ge_count-down-markets">
                    <label>Select Markets</label>
                    <ul>
                        <li>
                            <label>Australia</label>
                            <input 
                            type="checkbox" 
                            className="cd_market" 
                            value='aus' 
                            checked={props.cd_setCheckBoxes('aus')} 
                            onChange={(e)=>props.cd_setMarkets(e)} />
                        </li>
                        <li>
                            <label>Germany</label>
                            <input 
                            type="checkbox" 
                            className="cd_market" 
                            value='deu' 
                            checked={props.cd_setCheckBoxes('deu')} 
                            onChange={(e)=>props.cd_setMarkets(e)} />
                        </li>
                        <li>
                            <label>Spain</label>
                            <input 
                            type="checkbox" 
                            className="cd_market" 
                            value='esp' 
                            checked={props.cd_setCheckBoxes('esp')} 
                            onChange={(e)=>props.cd_setMarkets(e)} />
                        </li>
                        <li>
                            <label>Italy</label>
                            <input 
                            type="checkbox" 
                            className="cd_market" 
                            value='ita' 
                            checked={props.cd_setCheckBoxes('ita')} 
                            onChange={(e)=>props.cd_setMarkets(e)} />
                        </li>
                        <li>
                            <label>Latin America</label>
                            <input 
                            type="checkbox" 
                            className="cd_market" 
                            value='lac'
                            checked={props.cd_setCheckBoxes('lac')} 
                            onChange={(e)=>props.cd_setMarkets(e)} />
                        </li>
                        <li>
                            <label>Mexico</label>
                            <input 
                            type="checkbox" 
                            className="cd_market" 
                            value='mex' 
                            checked={props.cd_setCheckBoxes('mex')}
                            onChange={(e)=>props.cd_setMarkets(e)} />
                        </li>
                        <li>
                            <label>Norway</label>
                            <input 
                            type="checkbox" 
                            className="cd_market" 
                            value='nor' 
                            checked={props.cd_setCheckBoxes('nor')}
                            onChange={(e)=>props.cd_setMarkets(e)} />
                        </li>
                        <li>
                            <label>Singapore</label>
                            <input 
                            type="checkbox" 
                            className="cd_market" 
                            value='sgp' 
                            checked={props.cd_setCheckBoxes('sgp')}
                            onChange={(e)=>props.cd_setMarkets(e)} />
                        </li>
                        <li>
                            <label>Sweden</label>
                            <input 
                            type="checkbox" 
                            className="cd_market" 
                            value='swe' 
                            checked={props.cd_setCheckBoxes('swe')}
                            onChange={(e)=>props.cd_setMarkets(e)} />
                        </li>
                    </ul>
                </div>
                <div>
                    <label>Last</label>
                    <input 
                        type="text" 
                        id="cd_last" 
                        onChange={(e)=>props.cd_setState(e)}
                    />
                    <label >Days</label>
                    <input 
                        type="text" 
                        id="cd_days" 
                        onChange={(e)=>props.cd_setState(e)}
                    />
                </div>
                <div>
                    <label>Daylight Savings</label>
                    <select id="cd_dst" onChange={(e)=>props.cd_setState(e)}>
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                    <label>Invert Layout</label>
                    <select id="cd_layout" onChange={(e)=>props.cd_setState(e)}>
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

function Pills() {
    return (
        <div className='ge_pills-container'>
            
        </div>
    )
}

function PeopleWatching() {
    return (
        <div className='ge_people-watching-container'>
            
        </div>
    )
}

function ExitPopup() {
    return (
        <div className='ge_exit-popup-container'>
            
        </div>
    )
}

function KidsSailFree() {
    return (
        <div className='ge_ksf-container'>
            
        </div>
    )
}

function PromoCode() {
    return (
        <div className='ge_promo-code-container'>
            
        </div>
    )
}

function IOBD(){
    return(
        <div className="ge_iobd-container">

        </div>
    )
}

function Submit(props) {
    return (
        <div>
            <Button click={()=>{console.log('hello motto')}} >{props.children}</Button>
        </div>
    )
}

function CodeBlock(props){
    return (
        <code>
            <pre>
                {props.children}
            </pre>
        </code>
    )
}

export {HeroBanner, CountDown, Pills, PeopleWatching, ExitPopup, KidsSailFree, PromoCode, IOBD, Submit, CodeBlock}
