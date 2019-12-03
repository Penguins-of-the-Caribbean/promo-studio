import React, {useState} from 'react';
import './ComponentStyles/hero-banner.css';
import './ComponentStyles/count-down.css';
import './ComponentStyles/pills.css';
import './ComponentStyles/submit.css';
import Button from '../Button/';

function HeroBanner(props) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='ge_hero-banner-container'>
            <h1>Hero Banner</h1>
            <form>
                <label>Parent element</label>
                <p>{props.hb_setValues('hb_parent') !== '' ? props.hb_setValues('hb_parent') : 'Enter Value'}</p>
                <input 
                    type="text" 
                    id="hb_parent" 
                    onChange={(e)=>props.hb_setState(e)}
                    required
                />
                <label>Header text</label>
                <p>{props.hb_setValues('hb_header') !== '' ? props.hb_setValues('hb_header') : 'Enter Value'}</p>
                <input 
                    type="text" 
                    id="hb_header" 
                    onChange={(e)=>props.hb_setState(e)}
                    required
                />
                <label>Subtext</label>
                <p>{props.hb_setValues('hb_subtext') !== '' ? props.hb_setValues('hb_subtext') : 'Enter Value'}</p>
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
                <p>{props.hb_setValues('hb_desktopImage') !== '' ? props.hb_setValues('hb_desktopImage') : 'Enter Value'}</p>
                <input 
                    type="url" 
                    id="hb_desktopImage" 
                    onChange={(e)=>props.hb_setState(e)}
                    required
                />
                <label>Add mobile image</label>
                <p>{props.hb_setValues('hb_mobileImage') !== '' ? props.hb_setValues('hb_mobileImage') : 'Enter Value'}</p>
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
                            <p>{props.hb_setValues('hb_hShift') !== '' ? props.hb_setValues('hb_hShift')+'px' : 'Enter Value'}</p>
                            <input 
                                type="range" 
                                min="-10" 
                                max="10" 
                                step="1" 
                                id="hb_hShift" 
                                value={props.hb_setShadow('hb_hShift')}
                                onChange={(e)=>props.hb_setState(e)}
                            />
                            <label>Vertical Shift</label>
                            <p>{props.hb_setValues('hb_vShift') !== '' ? props.hb_setValues('hb_vShift')+'px' : 'Enter Value'}</p>
                            <input 
                                type="range" 
                                min="-10" 
                                max="10" 
                                step="1" 
                                id="hb_vShift" 
                                value={props.hb_setShadow('hb_hvShift')}
                                onChange={(e)=>props.hb_setState(e)}
                            />
                            <label>Blur Offset</label>
                            <p>{props.hb_setValues('hb_blur') !== '' ? props.hb_setValues('hb_blur')+'px' : 'Enter Value'}</p>
                            <input 
                                type="range" 
                                min="-10" 
                                max="10" 
                                step="1" 
                                id="hb_blur" 
                                value={props.hb_setShadow('hb_hblur')}
                                onChange={(e)=>props.hb_setState(e)}
                            />
                            <label>Color</label>
                            <p>{props.hb_setValues('hb_color') !== '' ? props.hb_setValues('hb_color') : 'Enter Value'}</p>
                            <input 
                                type="color" 
                                id="hb_color"
                                value={props.hb_setShadow('hb_color')} 
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

function Pills(props) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='ge_pills-container'>

            <div className='ge_pills-header'>
                <h1 className='ge_pills-title'>Pills</h1>
                <div className='ge_pills-added-counter'>Pill Count: {props.pl_amount}</div>
            </div>

            <div className='ge_pills-details-container'>
                <h3>Pill Details:</h3>
                <div className='ge_pills-details-inputs'>
                    <label>Pill Color: {props.pl_colorValue !== '' ? props.pl_colorValue : 'select color'}</label>
                    <input type="color" onChange={(e)=>props.pl_setColor(e)} id='pl_color'/>
                    <label>Pill Text: {props.pl_textValue}</label>
                    <input type="text" onChange={(e)=>props.pl_setColor(e)} id='pl_text'/>
                    <label>Pill Class Name: {props.pl_classValue}</label>
                    <input type="text" onChange={(e)=>props.pl_setColor(e)} id='pl_class'/>
                </div>
            </div>

            <div className='ge_pills-criteria-container'>
                <div className='ge_pills-criteria-header'>
                    <h3>Pill Criteria</h3>
                </div>
                <div className='ge_pills-criteria-inputs'>
                    <div className='ge_pills-criteria-ships'>
                        <h3>Ships</h3>
                        <ul>
                            <li>
                                <label>AD - Adventure of the Seas</label>
                                <input type="checkbox" value='AD'/>
                            </li>
                            <li>
                                <label>AL - Allure of the Seas</label>
                                <input type="checkbox" value='AL'/>
                            </li>
                            <li>
                                <label>AN - Anthem of the Seas</label>
                                <input type="checkbox" value='AN'/>
                            </li>
                            <li>
                                <label>BR - Brilliance of the Seas</label>
                                <input type="checkbox" value='BR'/>
                            </li>
                            <li>
                                <label>EN - Enchantment of the Seas</label>
                                <input type="checkbox" value='EN'/>
                            </li>
                            <li>
                                <label>EX - Explorer of the Seas</label>
                                <input type="checkbox" value='EX'/>
                            </li>
                            <li>
                                <label>FR - Freedom of the Seas</label>
                                <input type="checkbox" value='FR'/>
                            </li>
                            <li>
                                <label>GR - Grandeur of the Seas</label>
                                <input type="checkbox" value='GR'/>
                            </li>
                            <li>
                                <label>HM - Harmony of the Seas</label>
                                <input type="checkbox" value='HM'/>
                            </li>
                            <li>
                                <label>ID - Independence of the Seas</label>
                                <input type="checkbox" value='ID'/>
                            </li>
                            <li>
                                <label>JW - Jewel of the Seas</label>
                                <input type="checkbox" value='JW'/>
                            </li>
                            <li>
                                <label>LB - Liberty of the Seas</label>
                                <input type="checkbox" value='LB'/>
                            </li>
                            <li>
                                <label>LG - Legend of the Seas</label>
                                <input type="checkbox" value='LG'/>
                            </li>
                            <li>
                                <label>MA - Mariner of the Seas</label>
                                <input type="checkbox" value='MA'/>
                            </li>
                            <li>
                                <label>MJ - Majesty of the Seas</label>
                                <input type="checkbox" value='MJ'/>
                            </li>
                            <li>
                                <label>NE - Empress of the Seas</label>
                                <input type="checkbox" value='NE'/>
                            </li>
                            <li>
                                <label>NV - Navigator of the Seas</label>
                                <input type="checkbox" value='NV'/>
                            </li>
                            <li>
                                <label>OA - Oasis of the Seas</label>
                                <input type="checkbox" value='OA'/>
                            </li>
                            <li>
                                <label>OV - Ovation of the Seas</label>
                                <input type="checkbox" value='OV'/>
                            </li>
                            <li>
                                <label>OY - Odyssey of the Seas</label>
                                <input type="checkbox" value='OY'/>
                            </li>
                            <li>
                                <label>QN - Quantum of the Seas</label>
                                <input type="checkbox" value='QN'/>
                            </li>
                            <li>
                                <label>RD - Radiance of the Seas</label>
                                <input type="checkbox" value='RD'/>
                            </li>
                            <li>
                                <label>RH - Rhapsody of the Seas</label>
                                <input type="checkbox" value='RH'/>
                            </li>
                            <li>
                                <label>SR - Serenade of the Seas</label>
                                <input type="checkbox" value='SR'/>
                            </li>
                            <li>
                                <label>SY - Symphony of the Seas</label>
                                <input type="checkbox" value='SY'/>
                            </li>
                            <li>
                                <label>VI - Vision of the Seas</label>
                                <input type="checkbox" value='VI'/>
                            </li>
                            <li>
                                <label>VY - Voyager of the Seas</label>
                                <input type="checkbox" value='VY'/>
                            </li>
                        </ul>
                    </div>
                    <div className='ge_pills-criteria-sailings'>
                        <h3>Add Sailing Dates</h3>
                        <label>Start Date</label>
                        <input type="date"/>
                        <label>End Date</label>
                        <input type="date"/>
                        <button onClick={()=> props.pl_addSailingCriteria()}>Add</button>
                        <div>
                            {props.pl_currentSailings()}
                        </div>
                    </div>
                    <div className='ge_pills-criteria-nights'>
                        <h3>Number of Night</h3>
                        <label>From</label>
                        <input type="number"/>
                        <label>To</label>
                        <input type="number"/>
                    </div>
                    <div className='ge_pills-criteria-ports'>
                        <h3>Departure Ports</h3>
                        <label>Enter Port Name</label>
                        <input type="text"/>
                        <button>Add Port</button>
                    </div>
                </div>
            </div>

            <div className='ge_pills-exclusions-toggle'>
                <h3>Exlusions</h3>
                <input type="checkbox" onChange={(e)=>setToggle(e.target.checked)}/>
            </div>

            <div className='ge_pills-exclusions-containers'>
                {
                    toggle === true ? 
                    <div className='ge_pills-exclusions-panel'>
                        <h3>Pill Exclusions</h3>
                        <div className='ge_pills-exclusions-panel-container'>
                            <div className='ge_pills-exclusions-ships'>
                                <h3>Ships</h3>
                                <ul>  
                                    <li>
                                        <label>AD - Adventure of the Seas</label>
                                        <input type="checkbox" value='AD'/>
                                    </li>
                                    <li>
                                        <label>AL - Allure of the Seas</label>
                                        <input type="checkbox" value='AL'/>
                                    </li>
                                    <li>
                                        <label>AN - Anthem of the Seas</label>
                                        <input type="checkbox" value='AN'/>
                                    </li>
                                    <li>
                                        <label>BR - Brilliance of the Seas</label>
                                        <input type="checkbox" value='BR'/>
                                    </li>
                                    <li>
                                        <label>EN - Enchantment of the Seas</label>
                                        <input type="checkbox" value='EN'/>
                                    </li>
                                    <li>
                                        <label>EX - Explorer of the Seas</label>
                                        <input type="checkbox" value='EX'/>
                                    </li>
                                    <li>
                                        <label>FR - Freedom of the Seas</label>
                                        <input type="checkbox" value='FR'/>
                                    </li>
                                    <li>
                                        <label>GR - Grandeur of the Seas</label>
                                        <input type="checkbox" value='GR'/>
                                    </li>
                                    <li>
                                        <label>HM - Harmony of the Seas</label>
                                        <input type="checkbox" value='HM'/>
                                    </li>
                                    <li>
                                        <label>ID - Independence of the Seas</label>
                                        <input type="checkbox" value='ID'/>
                                    </li>
                                    <li>
                                        <label>JW - Jewel of the Seas</label>
                                        <input type="checkbox" value='JW'/>
                                    </li>
                                    <li>
                                        <label>LB - Liberty of the Seas</label>
                                        <input type="checkbox" value='LB'/>
                                    </li>
                                    <li>
                                        <label>LG - Legend of the Seas</label>
                                        <input type="checkbox" value='LG'/>
                                    </li>
                                    <li>
                                        <label>MA - Mariner of the Seas</label>
                                        <input type="checkbox" value='MA'/>
                                    </li>
                                    <li>
                                        <label>MJ - Majesty of the Seas</label>
                                        <input type="checkbox" value='MJ'/>
                                    </li>
                                    <li>
                                        <label>NE - Empress of the Seas</label>
                                        <input type="checkbox" value='NE'/>
                                    </li>
                                    <li>
                                        <label>NV - Navigator of the Seas</label>
                                        <input type="checkbox" value='NV'/>
                                    </li>
                                    <li>
                                        <label>OA - Oasis of the Seas</label>
                                        <input type="checkbox" value='OA'/>
                                    </li>
                                    <li>
                                        <label>OV - Ovation of the Seas</label>
                                        <input type="checkbox" value='OV'/>
                                    </li>
                                    <li>
                                        <label>OY - Odyssey of the Seas</label>
                                        <input type="checkbox" value='OY'/>
                                    </li>
                                    <li>
                                        <label>QN - Quantum of the Seas</label>
                                        <input type="checkbox" value='QN'/>
                                    </li>
                                    <li>
                                        <label>RD - Radiance of the Seas</label>
                                        <input type="checkbox" value='RD'/>
                                    </li>
                                    <li>
                                        <label>RH - Rhapsody of the Seas</label>
                                        <input type="checkbox" value='RH'/>
                                    </li>
                                    <li>
                                        <label>SR - Serenade of the Seas</label>
                                        <input type="checkbox" value='SR'/>
                                    </li>
                                    <li>
                                        <label>SY - Symphony of the Seas</label>
                                        <input type="checkbox" value='SY'/>
                                    </li>
                                    <li>
                                        <label>VI - Vision of the Seas</label>
                                        <input type="checkbox" value='VI'/>
                                    </li>
                                    <li>
                                        <label>VY - Voyager of the Seas</label>
                                        <input type="checkbox" value='VY'/>
                                    </li>
                                </ul>
                            </div>
                            <div className='ge_pills-exclusions-nights'>
                                <h3>Number of Night</h3>
                                <label>From</label>
                                <input type="number"/>
                                <label>To</label>
                                <input type="number"/>
                            </div>
                            <div className='ge_pills-exclusions-departure-port'>
                                <h3>Departure Ports</h3>
                                <label>Enter Port Name</label>
                                <input type="text"/>
                                <button>Exclude Port</button>
                            </div>
                            <div className='ge_pills-exclusions-destination-port'>
                                <h3>Destination Ports</h3>
                                <label>Enter Port Name</label>
                                <input type="text"/>
                                <button>Exclude Port</button>
                            </div>
                            <div className='ge_pills-exclusions-departure-dates'>
                                <h3>Exclude Departure Dates</h3>
                                <div>
                                    <label>Start Date</label>
                                    <input type="date"/>
                                    <label>End Date</label>
                                    <input type="date"/>
                                    <button>Exclude</button>
                                </div>
                            </div>
                            <div className='ge_pills-exclusions-pills'>
                                <h3>Exclude Other Pills</h3>
                                <div>
                                    <label>Pill Class Name</label>
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                    </div> : null
                }
            </div>
            
            <div className='ge_pills-create-pill-btn'>
                <button id='ge_pill-create'>create pill</button>
                <button id='ge_pill-delete'>delete pill</button>
            </div>

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
        <div className='ge_submit-container'>
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
