import React, {useState} from 'react';
import './ComponentStyles/hero-banner.css';
import './ComponentStyles/count-down.css';
import './ComponentStyles/pills.css';
import './ComponentStyles/exit-popup.css';
import './ComponentStyles/submit.css';
import './ComponentStyles/code-block.css';
import './ComponentStyles/promo-calendar.css'
import Button from '../Button/';
import TaskBar from '../Taskbar/';

function HeroBanner(props) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='ge_hero-banner-container'>
            <div className='ge_hero-banner-container-header'>
                <h1>Hero Banner</h1>
            </div>
            <div className='ge_hero-banner-parent-container'>
                <div className='ge_hero-banner-parent'>
                    <div className='ge_hb-labels'>
                        <label>Parent element:</label>
                        <p>{props.hb_setValues('hb_parent') !== '' ? props.hb_setValues('hb_parent') : 'Enter Value'}</p>
                    </div>
                    <input 
                        className='ge_input-style'
                        type="text" 
                        id="hb_parent" 
                        onChange={(e)=>props.hb_setState(e)}
                        required
                    />
                </div>
                <div className='ge_hero-banner-header'>
                    <div className='ge_hb-labels'>
                        <label>Header Text:</label>
                        <p>{props.hb_setValues('hb_header') !== '' ? props.hb_setValues('hb_header') : 'Enter Value'}</p>
                    </div>
                    <input 
                        className='ge_input-style'
                        type="text" 
                        id="hb_header" 
                        onChange={(e)=>props.hb_setState(e)}
                        required
                    />
                </div>
                <div className='ge_hero-banner-subtext'>
                    <div className='ge_hb-labels'>
                        <label>Subtext:</label>
                        <p>{props.hb_setValues('hb_subtext') !== '' ? props.hb_setValues('hb_subtext') : 'Enter Value'}</p>
                    </div>
                    <input
                        className='ge_input-style' 
                        type="text" 
                        id="hb_subtext" 
                        onChange={(e)=>props.hb_setState(e)}
                        required
                    />
                </div>
                <div className='ge_hero-banner-text-align'>
                    <label>Text alignment: </label>
                    <select className='ge_select-style' id="hb_textAlignment" onChange={(e)=>props.hb_setState(e)} required >
                        <option value="center">center(Default)</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                    </select>
                </div>
                <div className='ge_hero-banner-desktop-image'>
                    <div className='ge_hb-labels'>
                        <label>Add desktop image:</label>
                        <p>{props.hb_setValues('hb_desktopImage') !== '' ? props.hb_setValues('hb_desktopImage') : 'Enter Value'}</p>
                    </div>
                    <input 
                        className='ge_input-style'
                        type="url" 
                        id="hb_desktopImage" 
                        onChange={(e)=>props.hb_setState(e)}
                        required
                    />
                </div>
                <div className='ge_hero-banner-mobile-image'>
                    <div className='ge_hb-labels'>
                        <label>Add mobile image:</label>
                        <p>{props.hb_setValues('hb_mobileImage') !== '' ? props.hb_setValues('hb_mobileImage') : 'Enter Value'}</p>
                    </div>
                    <input 
                        className='ge_input-style'
                        type="url" 
                        id="hb_mobileImage"
                        onChange={(e)=>props.hb_setState(e)}
                    />
                </div>
                <div className='ge_hb-drop-shadow-widget'>
                    <div className='ge_hb-add-shadow'>
                        <label>Add Text Shadow</label>
                        <input 
                            type="checkbox" 
                            onChange={(e)=>setToggle(e.target.checked)}
                        />
                    </div>
                    {
                        toggle === true ? 
                        <div className="ge_hb-drop-shadow-widget-container">
                            <h3>Shadow Editor</h3>
                            <div className='ge_hb-drop-shadow-widget-controls'>
                                <div className='ge_hb-drop-shadow-input-container'>
                                    <div className='ge_hb-labels'>
                                        <label>Horizontal Shift:</label>
                                        <p>{props.hb_setValues('hb_hShift') !== '' ? props.hb_setValues('hb_hShift')+'px' : 'Enter Value'}</p>
                                    </div>
                                    <input 
                                        type="range" 
                                        min="-10" 
                                        max="10" 
                                        step="1" 
                                        id="hb_hShift" 
                                        value={props.hb_setShadow('hb_hShift')}
                                        onChange={(e)=>props.hb_setState(e)}
                                    />
                                </div>
                                <div className='ge_hb-drop-shadow-input-container'>
                                    <div className='ge_hb-labels'>
                                        <label>Vertical Shift:</label>
                                        <p>{props.hb_setValues('hb_vShift') !== '' ? props.hb_setValues('hb_vShift')+'px' : 'Enter Value'}</p>
                                    </div>
                                    <input 
                                        type="range" 
                                        min="-10" 
                                        max="10" 
                                        step="1" 
                                        id="hb_vShift" 
                                        value={props.hb_setShadow('hb_hvShift')}
                                        onChange={(e)=>props.hb_setState(e)}
                                    />
                                </div>
                                <div className='ge_hb-drop-shadow-input-container'>
                                    <div className='ge_hb-labels'>
                                        <label>Blur Offset:</label>
                                        <p>{props.hb_setValues('hb_blur') !== '' ? props.hb_setValues('hb_blur')+'px' : 'Enter Value'}</p>
                                    </div>
                                    <input 
                                        type="range" 
                                        min="-10" 
                                        max="10" 
                                        step="1" 
                                        id="hb_blur" 
                                        value={props.hb_setShadow('hb_hblur')}
                                        onChange={(e)=>props.hb_setState(e)}
                                    />
                                </div>
                                <div className='ge_hb-drop-shadow-input-container'>
                                    <div className='ge_hb-labels'>
                                        <label>Color:</label>
                                        <p>{props.hb_setValues('hb_color') !== '' ? props.hb_setValues('hb_color') : 'Enter Value'}</p>
                                    </div>
                                    <input 
                                        type="color" 
                                        id="hb_color"
                                        value={props.hb_setShadow('hb_color')} 
                                        onChange={(e)=>props.hb_setState(e)}
                                    />
                                </div>
                           </div>
                        </div> : null
                    }
                </div>
            </div>
        </div>
    )
}

function CountDownBanner(props){

    const [timer, setTimer] = useState(false);
    const [showDays, setShowDays] = useState(false);
    const [subtext, addSubtext] = useState(false);

    return (
        <div className='ge_count-down-container'>
            <div className='ge_count-down-header'>
                <h1>Countdown Banner</h1>
            </div>
            <div className='ge_count-down-form'>

                <div className='ge_cd-section'>
                    <div className='ge_hb-labels'>
                        <label>Parent Element:</label>
                        <p>{props.cd_setValues('cd_parent') !== '' ? props.cd_setValues('cd_parent') : 'Enter Value'}</p>
                    </div>
                    <input 
                        className='ge_input-style'
                        type="text" 
                        id="cd_parent" 
                        onChange={(e)=>props.cd_setState(e)} 
                    />
                </div>

                <div className='ge_timer-section'>
                    <div className='ge_cd-add-timer'>
                        <label>Add Timer</label>
                        <input 
                            type="checkbox" 
                            onChange={(e)=>setTimer(e.target.checked)}
                        />
                    </div>
                    {timer === true ? 
                        <div className='ge_timer-section'>
                            <div className='ge_cd-section'>
                                <div className='ge_hb-labels'>
                                    <label>Timer Text:</label>
                                    <p>{props.cd_setValues('cd_timerText') !== '' ? props.cd_setValues('cd_timerText') : 'Enter Value'}</p>
                                </div>
                                <input 
                                    className='ge_input-style'
                                    type="text" 
                                    id="cd_timerText" 
                                    onChange={(e)=>props.cd_setState(e)} 
                                />
                            </div>
                            <div className='ge_cd-section'>
                                <div className='ge_hb-labels'>
                                    <label>Start Date:</label>
                                    <p>{props.cd_setValues('cd_timerStartDate') !== '' ? props.cd_setValues('cd_timerStartDate') : 'Enter Value'}</p>
                                </div>
                                <input 
                                    className='ge_input-style'
                                    type="date" 
                                    id="cd_timerStartDate" 
                                    onChange={(e)=>props.cd_setState(e)} 
                                />
                            </div>
                            <div className='ge_cd-section'>
                                <div className='ge_hb-labels'>
                                    <label>Start Time:</label>
                                    <p>{props.cd_setValues('cd_timerStartTime') !== '' ? props.cd_setValues('cd_timerStartTime') : 'Enter Value'}</p>
                                </div>
                                <input 
                                    className='ge_input-style'
                                    type="time" 
                                    id="cd_timerStartTime" 
                                    onChange={(e)=>props.cd_setState(e)} 
                                />
                            </div>
                            <div className='ge_cd-section'>
                                <div className='ge_hb-labels'>
                                    <label>End Date:</label>
                                    <p>{props.cd_setValues('cd_timerEndDate') !== '' ? props.cd_setValues('cd_timerEndDate') : 'Enter Value'}</p>
                                </div>
                                <input 
                                    className='ge_input-style'
                                    type="date" 
                                    id="cd_timerEndDate" 
                                    onChange={(e)=>props.cd_setState(e)} 
                                />
                            </div>
                            <div className='ge_cd-section'>
                                <div className='ge_hb-labels'>
                                    <label>End Time:</label>
                                    <p>{props.cd_setValues('cd_timerEndTime') !== '' ? props.cd_setValues('cd_timerEndTime') : 'Enter Value'}</p>
                                </div>
                                <input 
                                    className='ge_input-style'
                                    type="time" 
                                    id="cd_timerEndTime" 
                                    onChange={(e)=>props.cd_setState(e)} 
                                />
                            </div>
                            <div className='ge_cd-add-timer'>
                                <label>Daylight Savings:</label>
                                <input 
                                    type="checkbox" 
                                    id="cd_timerShowDays" 
                                    onChange={(e)=> props.cd_setState(e)}
                                />
                            </div>
                            <div className='ge_cd-add-timer'>
                                <label>Reverse Layout:</label>
                                <input 
                                    type="checkbox" 
                                    id="cd_timerReverseLayout" 
                                    onChange={(e)=> props.cd_setState(e)}
                                />
                            </div>

                            <div>
                                <div className='ge_cd-add-timer'>
                                    <label>Show Days:</label>
                                    <input 
                                        type="checkbox" 
                                        id="cd_timerShowDays" 
                                        onChange={(e)=>{setShowDays(e.target.checked); props.cd_setState(e)}}
                                    />
                                </div>
                                {showDays === true ? 
                                    <div className='ge_cd-showdays-section'>
                                        <div className='ge_cd-showdays-wrapper'>
                                            <div className='ge_hb-labels'>
                                                <label>Text:</label>
                                                <p>{props.cd_setValues('cd_timerShowDaysLast') !== '' ? props.cd_setValues('cd_timerShowDaysLast') : 'Enter Value'}</p>
                                            </div>
                                            <input 
                                                className='ge_cd-input-style'
                                                type="text" 
                                                id="cd_timerShowDaysLast" 
                                                onChange={(e)=>props.cd_setState(e)} 
                                            />
                                        </div>
                                        <div className='ge_cd-showdays-wrapper'>
                                            <div className='ge_hb-labels'>
                                                <label>Number Of Days:</label>
                                                <p>{props.cd_setValues('cd_timerShowDaysNumber') !== '' ? props.cd_setValues('cd_timerShowDaysNumber') : 'Enter Value'}</p>
                                            </div>
                                            <input 
                                                className='ge_cd-input-style'
                                                type="number" 
                                                id="cd_timerShowDaysNumber" 
                                                onChange={(e)=>props.cd_setState(e)} 
                                            />
                                        </div>
                                        <div className='ge_cd-showdays-wrapper'>
                                            <div className='ge_hb-labels'>
                                                <label>Text:</label>
                                                <p>{props.cd_setValues('cd_timerShowDaysDays') !== '' ? props.cd_setValues('cd_timerShowDaysDays') : 'Enter Value'}</p>
                                            </div>
                                            <input 
                                                className='ge_cd-input-style'
                                                type="text" 
                                                id="cd_timerShowDaysDays" 
                                                onChange={(e)=>props.cd_setState(e)} 
                                            />
                                        </div>
                                    </div>
                                : null}
                            </div>

                        </div>
                    : null}
                </div>

                <div className='ge-cd-add-markets-section'>
                    <h3>Countries:</h3>
                    <div className='ge_cd-checkboxes-container'>
                        <ul>
                            <li>
                                <label>Australia</label>
                                <input 
                                    type="checkbox"
                                    value='aus'
                                    checked={props.cd_updateCountries('aus')}
                                    onChange={(e)=> props.cd_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Germany</label>
                                <input 
                                    type="checkbox"
                                    value='deu'
                                    checked={props.cd_updateCountries('deu')}
                                    onChange={(e)=> props.cd_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Great Britain</label>
                                <input 
                                    type="checkbox"
                                    value='gbr'
                                    checked={props.cd_updateCountries('gbr')}
                                    onChange={(e)=> props.cd_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Spain</label>
                                <input 
                                    type="checkbox"
                                    value='esp'
                                    checked={props.cd_updateCountries('esp')}
                                    onChange={(e)=> props.cd_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Ireland</label>
                                <input 
                                    type="checkbox"
                                    value='irl'
                                    checked={props.cd_updateCountries('irl')}
                                    onChange={(e)=> props.cd_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Italy</label>
                                <input 
                                    type="checkbox"
                                    value='ita'
                                    checked={props.cd_updateCountries('ita')}
                                    onChange={(e)=> props.cd_setCountries(e)}
                                />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <label>Latin America</label>
                                <input 
                                    type="checkbox"
                                    value='lac'
                                    checked={props.cd_updateCountries('lac')}
                                    onChange={(e)=> props.cd_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Mexico</label>
                                <input 
                                    type="checkbox"
                                    value='mex'
                                    checked={props.cd_updateCountries('mex')}
                                    onChange={(e)=> props.cd_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Norway</label>
                                <input 
                                    type="checkbox"
                                    value='nor'
                                    checked={props.cd_updateCountries('nor')}
                                    onChange={(e)=> props.cd_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Singapore</label>
                                <input 
                                    type="checkbox"
                                    value='sgp'
                                    checked={props.cd_updateCountries('sgp')}
                                    onChange={(e)=> props.cd_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Sweden</label>
                                <input 
                                    type="checkbox"
                                    value='swe'
                                    checked={props.cd_updateCountries('swe')}
                                    onChange={(e)=> props.cd_setCountries(e)}
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='ge_cd-textfields-section'>
                    <h3>Add Text Field</h3>
                    <div className='ge_cd-section'>
                        <div  className='ge_cd-text-section'>
                            <div className='ge_cd-text-section-wrapper'>
                                <div className='ge_hb-labels'>
                                    <label>Text:</label>
                                    <p>{props.cd_setTextField('text', 'text') !== '' ? props.cd_setTextField('text', 'text') : 'Enter Value'}</p>
                                </div>
                                <input 
                                    className='ge_cd-input-style'
                                    type="text"
                                    onChange={(e)=>props.cd_setTextFieldValues(e, 'text', 'text')} 
                                />
                            </div>
                            <div className='ge_cd-subtext-section-wrapper'>
                                <div className='ge_hb-labels'>
                                    <label>Font-size:</label>
                                    <p>{props.cd_setTextField('text', 'textSize') !== '' ? props.cd_setTextField('text', 'textSize') : 'Enter Value'}</p>
                                </div>
                                <input 
                                    className='ge_cd-input-style'
                                    type="number" 
                                    onChange={(e)=>props.cd_setTextFieldValues(e, 'text', 'textSize')} 
                                />
                            </div>
                            <div className='ge_cd-subtext-section-wrapper'>
                                <div className='ge_hb-labels'>
                                    <label>Alignment:</label>
                                    <p>{props.cd_setTextField('text', 'textAlign') !== '' ? props.cd_setTextField('text', 'textAlign') : 'Enter Value'}</p>
                                </div>
                                <select 
                                    className='ge_cd-select-style' 
                                    onChange={(e)=>props.cd_setTextFieldValues(e, 'text', 'textAlign')}
                                    >
                                    <option value="center">Center</option>
                                    <option value="left">Left</option>
                                    <option value="right">Right</option>
                                </select>
                            </div>
                        </div>

                        <div className='ge_cd-subtext-add-section'>
                            <div className='ge_cd-add-subext'>
                                <label>Add Subtext</label>
                                <input 
                                    type="checkbox" 
                                    onChange={(e)=>addSubtext(e.target.checked)}
                                />
                            </div>
                            {subtext === true ? 
                                <div  className='ge_cd-subtext-section'>
                                    <div className='ge_cd-subtext-section-wrapper'>
                                        <div className='ge_hb-labels'>
                                            <label>Subtext:</label>
                                            <p>{props.cd_setTextField('subText', 'text') !== '' ? props.cd_setTextField('subText', 'text') : 'Enter Value'}</p>
                                        </div>
                                        <input 
                                            className='ge_cd-input-style'
                                            type="text"
                                            onChange={(e)=>props.cd_setTextFieldValues(e, 'subText', 'text')} 
                                        />
                                    </div>
                                    <div className='ge_cd-subtext-section-wrapper'>
                                        <div className='ge_hb-labels'>
                                            <label>Font-size:</label>
                                            <p>{props.cd_setTextField('subText', 'textSize') !== '' ? props.cd_setTextField('subText', 'textSize') : 'Enter Value'}</p>
                                        </div>
                                        <input 
                                            className='ge_cd-input-style'
                                            type="number" 
                                            onChange={(e)=>props.cd_setTextFieldValues(e, 'subText', 'textSize')} 
                                        />
                                    </div>
                                    <div className='ge_cd-subtext-section-wrapper'>
                                        <div className='ge_hb-labels'>
                                            <label>Alignment:</label>
                                            <p>{props.cd_setTextField('subText', 'textAlign') !== '' ? props.cd_setTextField('subText', 'textAlign') : 'Enter Value'}</p>
                                        </div>
                                        <select 
                                            className='ge_cd-select-style' 
                                            onChange={(e)=>props.cd_setTextFieldValues(e, 'subText', 'textAlign')}
                                            >
                                            <option value="center">Center</option>
                                            <option value="left">Left</option>
                                            <option value="right">Right</option>
                                        </select>
                                    </div>
                                </div>
                             : null}
                        </div>
                    </div>
                </div>
                <div className='ge_cd-add-text-field'>
                    <button onClick={()=> props.cd_addTextField()}>Add</button>
                </div>
                <div className='ge_cd-textfields-container'>
                    {props.cd_updateTextField()}
                </div>

            </div>
        </div>
    )
}

function CountDown(props) {

    return (
        <div className='ge_count-down-container'>
            <div className='ge_count-down-header'>
                <h1>Count Down</h1>
            </div>
            <div className='ge_count-down-form'>
                <div className='ge_cd-section'>
                    <div className='ge_hb-labels'>
                        <label>Parent Element:</label>
                        <p>{props.cd_setValues('cd_parent') !== '' ? props.cd_setValues('cd_parent') : 'Enter Value'}</p>
                    </div>
                    <input 
                        className='ge_input-style'
                        type="text" 
                        id="cd_parent" 
                        onChange={(e)=>props.cd_setState(e)} 
                    />
                </div>

                <div className='ge_cd-section-a'>
                    <div className='ge_cd-section-b'>
                        <div className='ge_cd-section-c'>
                            <div className='ge_hb-labels'>
                                <label>Countdown Start-Date:</label>
                                <p>{props.cd_setValues('cd_startDate') !== '' ? props.cd_setValues('cd_startDate') : 'Enter Value'}</p>
                            </div>
                            <input 
                                className='ge_cd-section-c-input-style'
                                type="date" 
                                id="cd_startDate" 
                                onChange={(e)=>props.cd_setState(e)}
                            />
                        </div>
                        <div className='ge_cd-section-c'>
                            <div className='ge_hb-labels'>
                                <label>Countdown Start-Time:</label>
                                <p>{props.cd_setValues('cd_startTime') !== '' ? props.cd_setValues('cd_startTime') : 'Enter Value'}</p>
                            </div>
                            <input 
                                className='ge_cd-section-c-input-style'
                                type="time" 
                                id="cd_startTime" 
                                onChange={(e)=>props.cd_setState(e)}
                            />
                        </div>
                    </div>
                    <div className='ge_cd-section-b'>
                        <div className='ge_cd-section-c'>
                            <div className='ge_hb-labels'>
                                <label>Countdown End-Date:</label>
                                <p>{props.cd_setValues('cd_endDate') !== '' ? props.cd_setValues('cd_endDate') : 'Enter Value'}</p>
                            </div>
                            <input 
                                className='ge_cd-section-c-input-style'
                                type="date" 
                                id="cd_endDate" 
                                onChange={(e)=>props.cd_setState(e)}
                            />
                        </div>
                        <div className='ge_cd-section-c'>
                            <div className='ge_hb-labels'>
                                <label>Countdown End-Time:</label>
                                <p>{props.cd_setValues('cd_endTime') !== '' ? props.cd_setValues('cd_endTime') : 'Enter Value'}</p>
                            </div>
                            <input 
                                className='ge_cd-section-c-input-style'
                                type="time" 
                                id="cd_endTime" 
                                onChange={(e)=>props.cd_setState(e)}
                            />
                        </div>
                    </div>
                </div>

                <div className="ge_cd-section-a">
                    <div className='ge_cd-section-b'>
                        <div className='ge_cd-section-c'>
                            <div className='ge_hb-labels'>
                                <label>Offer:</label>
                                <p>{props.cd_setValues('cd_offer') !== '' ? props.cd_setValues('cd_offer') : 'Enter Value'}</p>
                            </div>
                            <input
                                className='ge_cd-section-c-input-style'
                                type="text" 
                                id="cd_offer"
                                onChange={(e)=>props.cd_setState(e)}
                            />
                        </div>
                        <div className='ge_cd-section-c'>
                            <div className='ge_hb-labels'>
                                <label>Text:</label>
                                <p>{props.cd_setValues('cd_text') !== '' ? props.cd_setValues('cd_text') : 'Enter Value'}</p>
                            </div>
                            <input 
                                className='ge_cd-section-c-input-style'
                                type="text" 
                                id="cd_text" 
                                onChange={(e)=>props.cd_setState(e)}
                            />
                        </div>
                    </div>
                    <div className='ge_cd-section-b'>
                        <div className='ge_cd-section-c'>
                            <div className='ge_hb-labels'>
                                <label>Subtext:</label>
                                <p>{props.cd_setValues('cd_subText') !== '' ? props.cd_setValues('cd_subText') : 'Enter Value'}</p>
                            </div>
                            <input 
                                className='ge_cd-section-c-input-style'
                                type="text" 
                                id="cd_subText" 
                                onChange={(e)=>props.cd_setState(e)}
                            />
                        </div>
                        <div className='ge_cd-section-c'>
                            <div className='ge_hb-labels'>
                                <label>Timer Text:</label>
                                <p>{props.cd_setValues('cd_timerText') !== '' ? props.cd_setValues('cd_timerText') : 'Enter Value'}</p>
                            </div>
                            <input
                                className='ge_cd-section-c-input-style'
                                type="text" 
                                id="cd_timerText" 
                                onChange={(e)=>props.cd_setState(e)}
                            />
                        </div>
                    </div>
                </div>
                
                <div className="ge_count-down-markets">
                    <div className="ge_count-down-markets-container">
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
                                <label>Great Britain</label>
                                <input 
                                type="checkbox" 
                                className="cd_market" 
                                value='gbr' 
                                checked={props.cd_setCheckBoxes('gbr')} 
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
                                <label>Ireland</label>
                                <input 
                                type="checkbox" 
                                className="cd_market" 
                                value='irl' 
                                checked={props.cd_setCheckBoxes('irl')} 
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
                    <div className='ge_cd-last-days'>
                        <label>Enter Last Days Text</label>
                        <div className='ge_cd-last-days-container'>
                            <div>
                                <div className='ge_hb-labels'>
                                    <label>Last:</label>
                                    <p>{props.cd_setValues('cd_last') !== '' ? props.cd_setValues('cd_last') : 'Enter Value'}</p>
                                </div>
                                <input 
                                    className='ge_cd-section-c-input-style'
                                    type="text" 
                                    id="cd_last" 
                                    onChange={(e)=>props.cd_setState(e)}
                                />
                            </div>
                            <div>
                                <div className='ge_hb-labels'>
                                    <label>Days:</label>
                                    <p>{props.cd_setValues('cd_days') !== '' ? props.cd_setValues('cd_days') : 'Enter Value'}</p>
                                </div>
                                <input 
                                    className='ge_cd-section-c-input-style'
                                    type="text" 
                                    id="cd_days" 
                                    onChange={(e)=>props.cd_setState(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='ge_cd-dst-and-layout'>
                        <label>Daylight Savings &amp; Invert Layout</label>
                        <div className='ge_cd-dst-and-layout-container'>
                            <div className='ge_hb-labels'>
                                <label>Daylight Savings:</label>
                                <p>{props.cd_setValues('cd_dst').toString()}</p>
                            </div>
                            <select className='ge_cd-input-style' id="cd_dst" onChange={(e)=>props.cd_setState(e)}>
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </select>
                            <div className='ge_hb-labels'>
                                <label>Invert Layout:</label>
                                <p>{props.cd_setValues('cd_layout').toString()}</p>
                            </div>
                            <select className='ge_cd-input-style' id="cd_layout" onChange={(e)=>props.cd_setState(e)}>
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </select>
                        </div>
                    </div>
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
            </div>

            <div className='ge_pills-details-container'>

                <div className='ge_pills-details-inputs'>

                    <div className='ge_pills-details-header'>
                        <h3>Pill Details:</h3>
                    </div>

                    <div className='ge_pills-details-input'>
                        <label>
                            {'Pill Color: '} 
                            {props.pl_updateDetailValue('pl_color') !== '' ? 
                            props.pl_updateDetailValue('pl_color') : 
                            'Select color'}
                        </label>
                        <input 
                            className='ge_pills-details-color-input'
                            type="color" 
                            id='pl_color' 
                            value={props.pl_updateDetailValue('pl_color') !== '' ? props.pl_updateDetailValue('pl_color') : null} 
                            onChange={(e)=>props.pl_setPillDetails(e)} 
                        />
                    </div>

                    <div className='ge_pills-details-input'>
                        <label>
                            {'Pill Text: '} 
                            {props.pl_updateDetailValue('pl_text') !== '' ? 
                            props.pl_updateDetailValue('pl_text') : 
                            'Enter text'}
                        </label>
                        <input 
                            className='ge_pills-input-style'
                            type="text" id='pl_text' 
                            onFocus={(e)=> e.target.value=''} 
                            value={textValue}
                            onChange={(e)=>{props.pl_setPillDetails(e); setTextValue(e.target.value)}} 
                        />
                    </div>

                    <div className='ge_pills-details-input'>
                        <label>
                            {'Pill Class Name: '} 
                            {props.pl_updateDetailValue('pl_class') !== '' ? 
                            props.pl_updateDetailValue('pl_class') : 
                            'Enter class name'}
                        </label>
                        <input 
                            className='ge_pills-input-style'
                            type="text" 
                            id='pl_class' 
                            onFocus={(e)=> e.target.value=''} 
                            value={classValue}
                            onChange={(e)=> {props.pl_setPillDetails(e); setClassValue(e.target.value)}} 
                        />
                    </div>

                </div>

                <div className="ge_pills-preview-panel">
                    <div className='ge_pills-preview-panel-container'>
                        <h3>Pill Preview:</h3>
                        <div className='ge_pills-added-counter'>Pill Count: {props.pl_amount}</div>
                    </div>
                    <div className='ge_pills-preview-panel-pill-container'>
                        {props.pl_updatePillList()}
                    </div>
                </div>

            </div>

            <div className='ge_pills-criteria-container'>
                <div className='ge_pills-criteria-header'>
                    <h3>Pill Criteria:</h3>
                </div>
                <div className='ge_pills-criteria-inputs'>
                    <div className='ge_pills-criteria-ships'>
                        <h3>Ships</h3>
                        <div className='ge_pills-criteria-ship-inputs-container'>
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
                            </ul>
                            <ul>
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
                            </ul>
                            <ul>
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
                                    <label>SC - Spectrum of the Seas</label>
                                    <input type="checkbox" id='SC' data-type='pillCriteria' checked={props.pl_setShipCheckBoxes('pillCriteria' ,'SC')} onChange={(e)=> props.pl_setShips(e)}/>
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
                    </div>
                    <div className='ge_pills-criteria-promos-container'>
                        <div className='ge_pills-criteria-parameter'>
                            <div className='ge_pills-criteria-parameter-container'>
                                <h3>Add Promo Dates</h3>
                                <label>Start Date:</label>
                                <input 
                                    type="date" 
                                    onFocus={(e)=> e.target.value = ''} 
                                    onChange={(e)=> setPromoDateValue({start: e.target.value, end: promoValues.end})}
                                />
                                <label>End Date:</label>
                                <input 
                                    type="date" 
                                    onFocus={(e)=> e.target.value = ''} 
                                    onChange={(e)=> setPromoDateValue({start: promoValues.start, end: e.target.value})}
                                />
                                <button onClick={()=> props.pl_addDate('pillCriteria', 'pl_promoDates', promoValues)}>Add</button>
                            </div>
                            <div className='ge_pills-criteria-item'>
                                {props.pl_updateDates('pillCriteria', 'pl_promoDates')}
                            </div>
                        </div>
                        <div className='ge_pills-criteria-parameter'>
                            <div className='ge_pills-criteria-parameter-container'>
                                <h3>Add Sailing Dates</h3>
                                <label>Start Date:</label>
                                <input 
                                    type="date" 
                                    onFocus={(e)=> e.target.value = ''} 
                                    onChange={(e)=> setSailingDateValue({start: e.target.value, end: sailingValues.end})}
                                />
                                <label>End Date:</label>
                                <input 
                                    type="date" 
                                    onFocus={(e)=> e.target.value = ''} 
                                    onChange={(e)=> setSailingDateValue({start: sailingValues.start, end: e.target.value})}
                                />
                                <button onClick={()=> props.pl_addDate('pillCriteria', 'pl_sailingDates', sailingValues)}>Add</button>
                            </div>
                            <div className='ge_pills-criteria-item'>
                                {props.pl_updateDates('pillCriteria', 'pl_sailingDates')}
                            </div>
                        </div>
                        <div className='ge_pills-criteria-parameter'>
                            <div className='ge_pills-criteria-parameter-container'>
                                <h3>Number of Night</h3>
                                <label>From:</label>
                                <input type="number" id='0' data-type='pillCriteria' className='pl_numberOfNights' onChange={(e)=> props.pl_setNights(e)}/>
                                <label>To:</label>
                                <input type="number" id='1' data-type='pillCriteria' className='pl_numberOfNights' onChange={(e)=> props.pl_setNights(e)}/>
                            </div>
                        </div>
                        <div className='ge_pills-criteria-parameter'>
                            <div className='ge_pills-criteria-parameter-container'>
                                <h3>Departure Ports</h3>
                                <label>Enter Port Name:</label>
                                <input type="text" onFocus={(e)=> e.target.value = ''} onChange={(e)=> setCriteriaDeparturePort(e.target.value)}/>
                                <button onClick={()=> props.pl_addPort('pillCriteria', 'pl_departurePorts', `"${criteriaDeparturePort}"`)}>Add Port</button>
                            </div>
                            <div className='ge_pills-criteria-item'>
                                {props.pl_updatePorts('pillCriteria', 'pl_departurePorts')}
                            </div>
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
                        <div className='ge_pills-exclusions-panel-container'>
                            <div className='ge_pills-exclusions-ships'>
                                <h3>Ships</h3>
                                <div className='ge_pills-exclusions-ships-container'>
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
                                    </ul>
                                    <ul>
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
                                    </ul>
                                    <ul>
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
                                            <label>SC - Spectrum of the Seas</label>
                                            <input type="checkbox" id='SC' data-type='pillExclusions' checked={props.pl_setShipCheckBoxes('pillExclusions' ,'SC')} onChange={(e)=> props.pl_setShips(e)}/>
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
                            </div>
                            <div className='ge_pills-exclusions-inputs-container'>
                                <div className='ge_pills-exclusion-parameter-container'>
                                    <h3>Number of Night</h3>
                                    <label>From</label>
                                    <input type="number" id='0' data-type='pillExclusions' className='pl_numberOfNights' onChange={(e)=> props.pl_setNights(e)}/>
                                    <label>To</label>
                                    <input type="number" id='1' data-type='pillExclusions' className='pl_numberOfNights' onChange={(e)=> props.pl_setNights(e)}/>
                                </div>
                                <div className='ge_pills-exclusion-parameter-container'>
                                    <div className='ge_pills-exclusion-param-input-container'>
                                        <h3>Departure Ports</h3>
                                        <label>Enter Port Name</label>
                                        <input type="text" onFocus={(e)=> e.target.value = ''} onChange={(e)=> setExclusiomnDeparturePort(e.target.value)}/>
                                        <button onClick={()=> props.pl_addPort('pillExclusions', 'pl_departurePorts', `"${exclusionDeparturePort}"`)}>Add Port</button>
                                    </div>
                                    <div className='ge_pill-exclusion'>
                                        {props.pl_updatePorts('pillExclusions', 'pl_departurePorts')}
                                    </div>
                                </div>
                                <div className='ge_pills-exclusion-parameter-container'>
                                    <div className='ge_pills-exclusion-param-input-container'>
                                        <h3>Destination Ports</h3>
                                        <label>Enter Port Name</label>
                                        <input type="text" onFocus={(e)=> e.target.value = ''} onChange={(e)=> setExclusionDestinationPort(e.target.value)}/>
                                        <button onClick={()=> props.pl_addPort('pillExclusions', 'pl_destinationPorts', `"${exclusionDestinationPort}"`)}>Add Port</button>
                                    </div>
                                    <div className='ge_pill-exclusion'>
                                        {props.pl_updatePorts('pillExclusions', 'pl_destinationPorts')}
                                    </div>
                                </div>
                                <div className='ge_pills-exclusion-parameter-container'>
                                    <div className='ge_pills-exclusion-param-input-container'>
                                        <h3>Departure Dates</h3>
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
                                    </div>
                                    <div className='ge_pill-exclusion'>
                                        {props.pl_updateDates('pillExclusions', 'pl_departureDates')}
                                    </div>
                                </div>
                                <div className='ge_pills-exclusion-parameter-container'>
                                    <div className='ge_pills-exclusion-param-input-container'>
                                        <h3>Other Pills</h3>
                                        <label>Pill Class Name</label>
                                        <input type="text" onFocus={(e)=> {e.target.value = ''; setExclusionsOtherPill('')}} onChange={(e)=> setExclusionsOtherPill(e.target.value)}/>
                                        <button onClick={()=> props.pl_setOtherPill(`"${exclusionsOtherPill}"`)}>Add</button>
                                    </div>
                                    <div className='ge_pill-exclusion'>
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

function ExitPopup(props) {
    return (
        <div className='ge_exit-popup-container'>
            <div className='ge_ep-details-container'>

                <div className='ge_ep-header'>
                    <h1>Exit Popup</h1>
                </div>

                <div className='ge_ep-background-color'>
                    <h3>Details:</h3>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Background Color:</label>
                            <p>{props.ep_setValue('ep_backgroundColor', 'bannerDetails')}</p>
                        </div>
                        <input 
                            type="color"
                            id='ep_backgroundColor'
                            value={props.ep_setValue('ep_backgroundColor', 'bannerDetails')}
                            onChange={(e)=> props.ep_setDetail(e, 'bannerDetails')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Offer Text:</label>
                            <p>{props.ep_setValue('ep_offerText', 'bannerDetails') !== '' ? props.ep_setValue('ep_offerText', 'bannerDetails') : 'Enter value'}</p>
                        </div>
                        <input 
                            type="text"
                            id='ep_offerText'
                            onChange={(e)=> props.ep_setDetail(e, 'bannerDetails')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Offer Sub-text:</label>
                            <p>{props.ep_setValue('ep_offerSubText', 'bannerDetails') !== '' ? props.ep_setValue('ep_offerSubText', 'bannerDetails') : 'Enter value'}</p>
                        </div>
                        <input 
                            type="text"
                            id='ep_offerSubText'
                            onChange={(e)=> props.ep_setDetail(e, 'bannerDetails')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Text Color:</label>
                            <p>{props.ep_setValue('ep_textColor', 'bannerDetails')}</p>
                        </div>
                        <input 
                            type="color"
                            id='ep_textColor'
                            value={props.ep_setValue('ep_textColor', 'bannerDetails')}
                            onChange={(e)=> props.ep_setDetail(e, 'bannerDetails')}
                        />
                    </div>
                </div>

                <div className='ge_ep-continue-btn'>
                    <h3>Continue Button:</h3>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Text:</label>
                            <p>{props.ep_setValue('ep_text', 'continueBtn') !== '' ? props.ep_setValue('ep_text', 'continueBtn') : 'Enter Value'}</p>
                        </div>
                        <input 
                            type="text"
                            id='ep_text'
                            onChange={(e)=> props.ep_setDetail(e, 'continueBtn')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Text Color:</label>
                            <p>{props.ep_setValue('ep_textColor', 'continueBtn')}</p>
                        </div>
                        <input 
                            type="color"
                            id='ep_textColor'
                            value={props.ep_setValue('ep_textColor', 'continueBtn')}
                            onChange={(e)=> props.ep_setDetail(e, 'continueBtn')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Background Color:</label>
                            <p>{props.ep_setValue('ep_backgroundColor', 'continueBtn')}</p>
                        </div>
                        <input 
                            type="color"
                            id='ep_backgroundColor'
                            value={props.ep_setValue('ep_backgroundColor', 'continueBtn')}
                            onChange={(e)=> props.ep_setDetail(e, 'continueBtn')}
                        />
                    </div>
                </div>

                <div className='ge_ep-cancel-btn'>
                    <h3>Cancel Button:</h3>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Text:</label>
                            <p>{props.ep_setValue('ep_text', 'cancelBtn') !== '' ? props.ep_setValue('ep_text', 'cancelBtn') : 'Enter Value'}</p>
                        </div>
                        <input 
                            type="text"
                            id='ep_text'
                            onChange={(e)=> props.ep_setDetail(e, 'cancelBtn')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Text Color:</label>
                            <p>{props.ep_setValue('ep_textColor', 'cancelBtn')}</p>
                        </div>
                        <input 
                            type="color"
                            id='ep_textColor'
                            value={props.ep_setValue('ep_textColor', 'cancelBtn')}
                            onChange={(e)=> props.ep_setDetail(e, 'cancelBtn')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Background Color:</label>
                            <p>{props.ep_setValue('ep_backgroundColor', 'cancelBtn')}</p>
                        </div>
                        <input 
                            type="color"
                            id='ep_backgroundColor'
                            value={props.ep_setValue('ep_backgroundColor', 'cancelBtn')}
                            onChange={(e)=> props.ep_setDetail(e, 'cancelBtn')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Border Color:</label>
                            <p>{props.ep_setValue('ep_borderColor', 'cancelBtn')}</p>
                        </div>
                        <input 
                            type="color"
                            id='ep_borderColor'
                            value={props.ep_setValue('ep_borderColor', 'cancelBtn')}
                            onChange={(e)=> props.ep_setDetail(e, 'cancelBtn')}
                        />
                    </div>
                </div>

                <div className='ge_ep-clock'>
                    <h3>Clock Text:</h3>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Hours Text:</label>
                            <p>{props.ep_setValue('ep_hours', 'clock') !== '' ? props.ep_setValue('ep_hours', 'clock') : 'Enter Value'}</p>
                        </div>
                        <input 
                            type="text"
                            id='ep_hours'
                            onChange={(e)=> props.ep_setDetail(e, 'clock')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Minutes Text:</label>
                            <p>{props.ep_setValue('ep_minutes', 'clock') !== '' ? props.ep_setValue('ep_minutes', 'clock') : 'Enter Value'}</p>
                        </div>
                        <input 
                            type="text"
                            id='ep_minutes'
                            onChange={(e)=> props.ep_setDetail(e, 'clock')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Seconds Text:</label>
                            <p>{props.ep_setValue('ep_seconds', 'clock') !== '' ? props.ep_setValue('ep_seconds', 'clock') : 'Enter Value'}</p>
                        </div>
                        <input 
                            type="text"
                            id='ep_seconds'
                            onChange={(e)=> props.ep_setDetail(e, 'clock')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Hours Left:</label>
                            <p>{props.ep_setValue('ep_hoursLeft', 'clock') !== '' ? props.ep_setValue('ep_hoursLeft', 'clock') : 'Enter Value'}</p>
                        </div>
                        <input 
                            type="text"
                            id='ep_hoursLeft'
                            onChange={(e)=> props.ep_setDetail(e, 'clock')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Days Left:</label>
                            <p>{props.ep_setValue('ep_daysLeft', 'clock') !== '' ? props.ep_setValue('ep_daysLeft', 'clock') : 'Enter Value'}</p>
                        </div>
                        <input 
                            type="text"
                            id='ep_daysLeft'
                            onChange={(e)=> props.ep_setDetail(e, 'clock')}
                        />
                    </div>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Text Color:</label>
                            <p>{props.ep_setValue('ep_textColor', 'clock')}</p>
                        </div>
                        <input 
                            type="color"
                            id='ep_textColor'
                            value={props.ep_setValue('ep_textColor', 'clock')}
                            onChange={(e)=> props.ep_setDetail(e, 'clock')}
                        />
                    </div>
                </div>

                <div className='ge_ep-count-down'>
                    <h3>Count-down:</h3>
                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-color-input-container'>
                            <div className='ge_ep-input-header-container'>
                                <label>Start Date:</label>
                                <p>{props.ep_setValue('ep_dateStart', 'countDown') !== '' ? props.ep_setValue('ep_dateStart', 'countDown') : 'Enter Time'}</p>
                            </div>
                            <input 
                                type='date'
                                id='ep_dateStart'
                                onChange={(e)=> props.ep_setDetail(e, 'countDown')}
                            />
                        </div>
                        <div className='ge_ep-color-input-container'>
                            <div className='ge_ep-input-header-container'>
                                <label>Start Time:</label>
                                <p>{props.ep_setValue('ep_timeStart', 'countDown') !== '' ? props.ep_setValue('ep_timeStart', 'countDown') : 'Enter Time'}</p>
                            </div>
                            <input 
                                type='time'
                                id='ep_timeStart'
                                onChange={(e)=> props.ep_setDetail(e, 'countDown')}
                            />
                        </div>
                    </div>

                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-color-input-container'>
                            <div className='ge_ep-input-header-container'>
                                <label>End Date:</label>
                                <p>{props.ep_setValue('ep_dateEnd', 'countDown') !== '' ? props.ep_setValue('ep_dateEnd', 'countDown') : 'Enter Time'}</p>
                            </div>
                            <input 
                                type='date'
                                id='ep_dateEnd'
                                onChange={(e)=> props.ep_setDetail(e, 'countDown')}
                            />
                        </div>
                        <div className='ge_ep-color-input-container'>
                            <div className='ge_ep-input-header-container'>
                                <label>End Time:</label>
                                <p>{props.ep_setValue('ep_timeEnd', 'countDown') !== '' ? props.ep_setValue('ep_timeEnd', 'countDown') : 'Enter Time'}</p>
                            </div>
                            <input 
                                type='time'
                                id='ep_timeEnd'
                                onChange={(e)=> props.ep_setDetail(e, 'countDown')}
                            />
                        </div>
                    </div>

                </div>

                <div className='ge_ep-countries'>
                    <h3>Countries:</h3>
                    <div className='ge_ep-checkboxes-container'>
                        <ul>
                            <li>
                                <label>Australia</label>
                                <input 
                                    type="checkbox"
                                    value='aus'
                                    checked={props.ep_setValue('aus', 'countries')}
                                    onChange={(e)=> props.ep_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Germany</label>
                                <input 
                                    type="checkbox"
                                    value='deu'
                                    checked={props.ep_setValue('deu', 'countries')}
                                    onChange={(e)=> props.ep_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Great Britain</label>
                                <input 
                                    type="checkbox"
                                    value='gbr'
                                    checked={props.ep_setValue('gbr', 'countries')}
                                    onChange={(e)=> props.ep_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Spain</label>
                                <input 
                                    type="checkbox"
                                    value='esp'
                                    checked={props.ep_setValue('esp', 'countries')}
                                    onChange={(e)=> props.ep_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Ireland</label>
                                <input 
                                    type="checkbox"
                                    value='irl'
                                    checked={props.ep_setValue('irl', 'countries')}
                                    onChange={(e)=> props.ep_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Italy</label>
                                <input 
                                    type="checkbox"
                                    value='ita'
                                    checked={props.ep_setValue('ita', 'countries')}
                                    onChange={(e)=> props.ep_setCountries(e)}
                                />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <label>Latin America</label>
                                <input 
                                    type="checkbox"
                                    value='lac'
                                    checked={props.ep_setValue('lac', 'countries')}
                                    onChange={(e)=> props.ep_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Mexico</label>
                                <input 
                                    type="checkbox"
                                    value='mex'
                                    checked={props.ep_setValue('mex', 'countries')}
                                    onChange={(e)=> props.ep_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Norway</label>
                                <input 
                                    type="checkbox"
                                    value='nor'
                                    checked={props.ep_setValue('nor', 'countries')}
                                    onChange={(e)=> props.ep_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Singapore</label>
                                <input 
                                    type="checkbox"
                                    value='sgp'
                                    checked={props.ep_setValue('sgp', 'countries')}
                                    onChange={(e)=> props.ep_setCountries(e)}
                                />
                            </li>
                            <li>
                                <label>Sweden</label>
                                <input 
                                    type="checkbox"
                                    value='swe'
                                    checked={props.ep_setValue('swe', 'countries')}
                                    onChange={(e)=> props.ep_setCountries(e)}
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='ge_ep-dst-and-days'>
                    <h3>Miscellaneous:</h3>

                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Daylight Savings Time:</label>
                            <input 
                                type="checkbox"
                                value='dst'
                                checked={props.ep_setValue('dst', 'misc')}
                                onChange={(e)=> props.ep_setMisc(e)}
                            />
                        </div>
                    </div>

                    <div className='ge_ep-color-input-container'>
                        <div className='ge_ep-input-header-container'>
                            <label>Show Days:</label>
                            <input 
                                type="checkbox"
                                value='showDays'
                                checked={props.ep_setValue('showDays', 'misc')}
                                onChange={(e)=> props.ep_setMisc(e)}
                            />
                        </div>
                    </div>

                </div>

            </div>

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
            <Button>{props.children}</Button>
        </div>
    )
}

function CodeBlock(props){

    return (
        <div className='ge_code-block-container'>
            <code className='ge_code-block'>
                <pre>
                    {props.children}
                </pre>
            </code>
            <textarea className='ge_code-block-text' readOnly value={props.children}>
                {props.children}
            </textarea>
            <TaskBar>
                <Button click={()=>{ 
                    document.querySelector('.ge_code-block-text').select();
                    document.execCommand('copy');
                }
                }>Copy Code</Button>
            </TaskBar>
        </div>
    )
}

function Promos(props){

    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(2020);
    const [showCalendar, toggleCalendar] = useState(false);

    return(
        <div className='ge_promo-calendar'>
            <div className='ge_promo-calendar-filter'>
                <select onChange={(e)=> setMonth(Number(e.target.value))}>
                    <option value='0'>January</option>
                    <option value='1'>February</option>
                    <option value='2'>March</option>
                    <option value='3'>April</option>
                    <option value='4'>May</option>
                    <option value='5'>June</option>
                    <option value='6'>July</option>
                    <option value='7'>August</option>
                    <option value='8'>September</option>
                    <option value='9'>October</option>
                    <option value='10'>November</option>
                    <option value='11'>December</option>
                </select>

                <select onChange={(e)=> setYear(Number(e.target.value))}>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                    <option value='2027'>2027</option>
                    <option value='2028'>2028</option>
                    <option value='2029'>2029</option>
                    <option value='2030'>2030</option>
                </select>

                <ul>
                    <li>
                        <input 
                            type="checkbox"
                            onChange={(e)=> {props.pc_setMarkets(e, 'all'); toggleCalendar(e.target.checked)}}
                        />All
                    </li>
                    {
                        props.pc_markets.map((market, i)=>{
                            return <li key={i}>
                                        <input 
                                            type="checkbox" 
                                            checked={market.active }
                                            onChange={(e)=> {props.pc_setMarkets(e, market.name); toggleCalendar(e.target.checked)}}
                                        />
                                        {market.name}
                                    </li>
                        })
                    }
                </ul>
                
            </div>
            
            {showCalendar === true ? 
                <div>
                    <div className='ge_promo-calendar-days-container'>
                        <div className='ge_buffer'></div>
                        <div className='ge_promo-calendar-days-container'>
                            {props.pc_renderMonth(year, month)}
                        </div>
                    </div>

                    <div className='ge_promo-calendar-markets'>
                        {props.pc_renderMarkets()}
                    </div>
                </div>: null
            }

        </div>
    )
}

export {HeroBanner, CountDownBanner, CountDown, Pills, PeopleWatching, ExitPopup, KidsSailFree, PromoCode, IOBD, Submit, CodeBlock, Promos}


