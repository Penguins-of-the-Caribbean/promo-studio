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
    const [textValue, setTextValue] = useState('');
    const [classValue, setClassValue] = useState('');
    const [promoValues, setPromoDateValue] = useState({});
    const [sailingValues, setSailingDateValue] = useState({});
    const [criteriaDeparturePort, setCriteriaDeparturePort] = useState('');
    const [exclusionDeparturePort, setExclusiomnDeparturePort] = useState('');
    const [exclusionDestinationPort, setExclusionDestinationPort] = useState('');
    const [exclusionDepartureDates, setExclusionDepartureDate] = useState({});
    const [exclusionsOtherPill, setExclusionsOtherPill] = useState('');

    return (
        <div className='ge_pills-container'>

            <div className='ge_pills-header'>
                <h1 className='ge_pills-title'>Pills</h1>
                <div className='ge_pills-added-counter'>Pill Count: {props.pl_amount}</div>
            </div>

            <div className='ge_pills-details-container'>
                <div className='ge_pills-details-inputs'>
                    <h3>Pill Details:</h3>
                    <label>
                        {'Pill Color: '} 
                        {props.pl_updateDetailValue('pl_color') !== '' ? 
                        props.pl_updateDetailValue('pl_color') : 
                        'Select color'}
                    </label>
                    <input 
                        type="color" 
                        id='pl_color' 
                        value={props.pl_updateDetailValue('pl_color') !== '' ? props.pl_updateDetailValue('pl_color') : null} 
                        onChange={(e)=>props.pl_setPillDetails(e)} />

                    <label>
                        {'Pill Text: '} 
                        {props.pl_updateDetailValue('pl_text') !== '' ? 
                        props.pl_updateDetailValue('pl_text') : 
                        'Enter text'}
                    </label>
                    <input 
                        type="text" id='pl_text' 
                        onFocus={(e)=> e.target.value=''} 
                        value={textValue}
                        onChange={(e)=>{props.pl_setPillDetails(e); setTextValue(e.target.value)}} />

                    <label>
                        {'Pill Class Name: '} 
                        {props.pl_updateDetailValue('pl_class') !== '' ? 
                        props.pl_updateDetailValue('pl_class') : 
                        'Enter class name'}
                    </label>
                    <input 
                        type="text" 
                        id='pl_class' 
                        onFocus={(e)=> e.target.value=''} 
                        value={classValue}
                        onChange={(e)=> {props.pl_setPillDetails(e); setClassValue(e.target.value)}} 
                    />
                </div>

                <div className="ge_pills-preview-panel">
                    <h3>Pill Preview:</h3>
                    <div className='ge_pills-preview-panel-pill-container'>
                        {props.pl_updatePillList()}
                    </div>
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
                                <input type="checkbox" id='AD' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'AD')} onChange={(e)=> props.pl_setShips(e)} />
                            </li>
                            <li>
                                <label>AL - Allure of the Seas</label>
                                <input type="checkbox" id='AL' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'AL')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>AN - Anthem of the Seas</label>
                                <input type="checkbox" id='AN' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'AN')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>BR - Brilliance of the Seas</label>
                                <input type="checkbox" id='BR' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'BR')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>EN - Enchantment of the Seas</label>
                                <input type="checkbox" id='EN' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'EN')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>EX - Explorer of the Seas</label>
                                <input type="checkbox" id='EX' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'EX')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>FR - Freedom of the Seas</label>
                                <input type="checkbox" id='FR' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'FR')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>GR - Grandeur of the Seas</label>
                                <input type="checkbox" id='GR' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'GR')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>HM - Harmony of the Seas</label>
                                <input type="checkbox" id='HM' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'HM')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>ID - Independence of the Seas</label>
                                <input type="checkbox" id='ID' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'ID')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>JW - Jewel of the Seas</label>
                                <input type="checkbox" id='JW' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'JW')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>LB - Liberty of the Seas</label>
                                <input type="checkbox" id='LB' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'LB')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>LG - Legend of the Seas</label>
                                <input type="checkbox" id='LG' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'LG')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>MA - Mariner of the Seas</label>
                                <input type="checkbox" id='MA' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'MA')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>MJ - Majesty of the Seas</label>
                                <input type="checkbox" id='MJ' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'MJ')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>NE - Empress of the Seas</label>
                                <input type="checkbox" id='NE' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'NE')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>NV - Navigator of the Seas</label>
                                <input type="checkbox" id='NV' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'NV')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>OA - Oasis of the Seas</label>
                                <input type="checkbox" id='OA' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'OA')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>OV - Ovation of the Seas</label>
                                <input type="checkbox" id='OV' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'OV')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>OY - Odyssey of the Seas</label>
                                <input type="checkbox" id='OY' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'OY')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>QN - Quantum of the Seas</label>
                                <input type="checkbox" id='QN' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'QN')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>RD - Radiance of the Seas</label>
                                <input type="checkbox" id='RD' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'RD')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>RH - Rhapsody of the Seas</label>
                                <input type="checkbox" id='RH' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'RH')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>SR - Serenade of the Seas</label>
                                <input type="checkbox" id='SR' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'SR')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>SY - Symphony of the Seas</label>
                                <input type="checkbox" id='SY' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'SY')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>VI - Vision of the Seas</label>
                                <input type="checkbox" id='VI' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'VI')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                            <li>
                                <label>VY - Voyager of the Seas</label>
                                <input type="checkbox" id='VY' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'VY')} onChange={(e)=> props.pl_setShips(e)}/>
                            </li>
                        </ul>
                    </div>
                    <div className='ge_pills-criteria-promos'>
                        <h3>Add Promo Dates</h3>
                        <label>Start Date</label>
                        <input 
                            type="date" 
                            onFocus={(e)=> e.target.value = ''} 
                            onChange={(e)=> setPromoDateValue({start: e.target.value, end: promoValues.end})}
                        />
                        <label>End Date</label>
                        <input 
                            type="date" 
                            onFocus={(e)=> e.target.value = ''} 
                            onChange={(e)=> setPromoDateValue({start: promoValues.start, end: e.target.value})}
                        />
                        <button onClick={()=> props.pl_addDate('pillCriteria', 'pl_promoDates', promoValues)}>Add</button>
                        <div>
                            {props.pl_updateDates('pillCriteria', 'pl_promoDates')}
                        </div>
                    </div>
                    <div className='ge_pills-criteria-sailings'>
                        <h3>Add Sailing Dates</h3>
                        <label>Start Date</label>
                        <input 
                            type="date" 
                            onFocus={(e)=> e.target.value = ''} 
                            onChange={(e)=> setSailingDateValue({start: e.target.value, end: sailingValues.end})}
                        />
                        <label>End Date</label>
                        <input 
                            type="date" 
                            onFocus={(e)=> e.target.value = ''} 
                            onChange={(e)=> setSailingDateValue({start: sailingValues.start, end: e.target.value})}
                        />
                        <button onClick={()=> props.pl_addDate('pillCriteria', 'pl_sailingDates', sailingValues)}>Add</button>
                        <div>
                            {props.pl_updateDates('pillCriteria', 'pl_sailingDates')}
                        </div>
                    </div>
                    <div className='ge_pills-criteria-nights'>
                        <h3>Number of Night</h3>
                        <label>From</label>
                        <input type="number" id='0' data-type='pillCriteria' className='pl_numberOfNights' onChange={(e)=> props.pl_setNights(e)}/>
                        <label>To</label>
                        <input type="number" id='1' data-type='pillCriteria' className='pl_numberOfNights' onChange={(e)=> props.pl_setNights(e)}/>
                    </div>
                    <div className='ge_pills-criteria-ports'>
                        <h3>Departure Ports</h3>
                        <label>Enter Port Name</label>
                        <input type="text" onFocus={(e)=> e.target.value = ''} onChange={(e)=> setCriteriaDeparturePort(e.target.value)}/>
                        <button onClick={()=> props.pl_addPort('pillCriteria', 'pl_departurePorts', `"${criteriaDeparturePort}"`)}>Add Port</button>
                        <div>
                            {props.pl_updatePorts('pillCriteria', 'pl_departurePorts')}
                        </div>
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
                                        <input type="checkbox" id='AD' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'AD')} onChange={(e)=> props.pl_setShips(e)} />
                                    </li>
                                    <li>
                                        <label>AL - Allure of the Seas</label>
                                        <input type="checkbox" id='AL' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'AL')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>AN - Anthem of the Seas</label>
                                        <input type="checkbox" id='AN' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'AN')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>BR - Brilliance of the Seas</label>
                                        <input type="checkbox" id='BR' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'BR')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>EN - Enchantment of the Seas</label>
                                        <input type="checkbox" id='EN' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'EN')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>EX - Explorer of the Seas</label>
                                        <input type="checkbox" id='EX' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'EX')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>FR - Freedom of the Seas</label>
                                        <input type="checkbox" id='FR' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'FR')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>GR - Grandeur of the Seas</label>
                                        <input type="checkbox" id='GR' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'GR')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>HM - Harmony of the Seas</label>
                                        <input type="checkbox" id='HM' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'HM')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>ID - Independence of the Seas</label>
                                        <input type="checkbox" id='ID' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'ID')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>JW - Jewel of the Seas</label>
                                        <input type="checkbox" id='JW' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'JW')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>LB - Liberty of the Seas</label>
                                        <input type="checkbox" id='LB' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'LB')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>LG - Legend of the Seas</label>
                                        <input type="checkbox" id='LG' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'LG')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>MA - Mariner of the Seas</label>
                                        <input type="checkbox" id='MA' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'MA')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>MJ - Majesty of the Seas</label>
                                        <input type="checkbox" id='MJ' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'MJ')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>NE - Empress of the Seas</label>
                                        <input type="checkbox" id='NE' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'NE')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>NV - Navigator of the Seas</label>
                                        <input type="checkbox" id='NV' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'NV')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>OA - Oasis of the Seas</label>
                                        <input type="checkbox" id='OA' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'OA')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>OV - Ovation of the Seas</label>
                                        <input type="checkbox" id='OV' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'OV')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>OY - Odyssey of the Seas</label>
                                        <input type="checkbox" id='OY' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'OY')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>QN - Quantum of the Seas</label>
                                        <input type="checkbox" id='QN' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'QN')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>RD - Radiance of the Seas</label>
                                        <input type="checkbox" id='RD' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'RD')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>RH - Rhapsody of the Seas</label>
                                        <input type="checkbox" id='RH' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'RH')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>SR - Serenade of the Seas</label>
                                        <input type="checkbox" id='SR' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'SR')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>SY - Symphony of the Seas</label>
                                        <input type="checkbox" id='SY' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'SY')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>VI - Vision of the Seas</label>
                                        <input type="checkbox" id='VI' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'VI')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                    <li>
                                        <label>VY - Voyager of the Seas</label>
                                        <input type="checkbox" id='VY' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'VY')} onChange={(e)=> props.pl_setShips(e)}/>
                                    </li>
                                </ul>
                            </div>
                            <div className='ge_pills-exclusions-nights'>
                                <h3>Number of Night</h3>
                                <label>From</label>
                                <input type="number" id='0' data-type='pillExclusions' className='pl_numberOfNights' onChange={(e)=> props.pl_setNights(e)}/>
                                <label>To</label>
                                <input type="number" id='1' data-type='pillExclusions' className='pl_numberOfNights' onChange={(e)=> props.pl_setNights(e)}/>
                            </div>
                            <div className='ge_pills-exclusions-departure-port'>
                                <h3>Departure Ports</h3>
                                <label>Enter Port Name</label>
                                <input type="text" onFocus={(e)=> e.target.value = ''} onChange={(e)=> setExclusiomnDeparturePort(e.target.value)}/>
                                <button onClick={()=> props.pl_addPort('pillExclusions', 'pl_departurePorts', `"${exclusionDeparturePort}"`)}>Add Port</button>
                                <div>
                                    {props.pl_updatePorts('pillExclusions', 'pl_departurePorts')}
                                </div>
                            </div>
                            <div className='ge_pills-exclusions-destination-port'>
                                <h3>Destination Ports</h3>
                                <label>Enter Port Name</label>
                                <input type="text" onFocus={(e)=> e.target.value = ''} onChange={(e)=> setExclusionDestinationPort(e.target.value)}/>
                                <button onClick={()=> props.pl_addPort('pillExclusions', 'pl_destinationPorts', `"${exclusionDestinationPort}"`)}>Add Port</button>
                                <div>
                                    {props.pl_updatePorts('pillExclusions', 'pl_destinationPorts')}
                                </div>
                            </div>
                            <div className='ge_pills-exclusions-departure-dates'>
                                <h3>Departure Dates</h3>
                                <div>
                                    <label>Start Date</label>
                                    <input 
                                        type="date" 
                                        onFocus={(e)=> e.target.value = ''} 
                                        onChange={(e)=> setExclusionDepartureDate({start: e.target.value, end: exclusionDepartureDates.end})}
                                    />
                                    <label>End Date</label>
                                    <input 
                                        type="date" 
                                        onFocus={(e)=> e.target.value = ''} 
                                        onChange={(e)=> setExclusionDepartureDate({start: exclusionDepartureDates.start, end: e.target.value})}
                                    />
                                    <button onClick={()=> props.pl_addDate('pillExclusions', 'pl_departureDates', exclusionDepartureDates)}>Add</button>
                                    <div>
                                        {props.pl_updateDates('pillExclusions', 'pl_departureDates')}
                                    </div>
                                </div>
                            </div>
                            <div className='ge_pills-exclusions-pills'>
                                <h3>Other Pills</h3>
                                <div>
                                    <label>Pill Class Name</label>
                                    <input type="text" onFocus={(e)=> {e.target.value = ''; setExclusionsOtherPill('')}} onChange={(e)=> setExclusionsOtherPill(e.target.value)}/>
                                    <button onClick={()=> props.pl_setOtherPill(`"${exclusionsOtherPill}"`)}>Add</button>
                                    <div>
                                        {props.pl_updateOtherPills()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null
                }
            </div>
            
            <div className='ge_pills-create-pill-btn'>
                <button id='ge_pill-create' onClick={()=> {props.pl_createNewPill(); setTextValue(''); setClassValue('')}} >Save</button>
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
