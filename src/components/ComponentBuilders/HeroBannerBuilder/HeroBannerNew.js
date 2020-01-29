import React, {useState, useEffect, useRef} from 'react';
import './heroBannerBuilder.css';

export default function HeroBannerNew(props) {

    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [dimensions, setDimensions] = useState({width: 0, height: 0});
    const imageDimensions = useRef();

    const [headerFontSize, setHeaderFontSize] = useState('');
    const [subtextFontSize, setSubtextFontSize] = useState('');
    const [disclaimerFontSize, setDisclaimerFontSize] = useState('');

    const [textSplit, setTextSplit] = useState('');

    const textStyles = {
        header:{
            color: props.hb_data.hb_header.textColor,
            fontSize: headerFontSize,
            textAlign: props.hb_data.hb_header.textAlign,
            textShadow: `${props.hb_data.hb_hShift} ${props.hb_data.hb_vShift} ${props.hb_data.hb_blur} ${props.hb_data.hb_color}`
        },
        subtext:{
            color: props.hb_data.hb_subtext.textColor,
            fontSize: subtextFontSize,
            textAlign: props.hb_data.hb_subtext.textAlign,
            textShadow: `${props.hb_data.hb_hShift} ${props.hb_data.hb_vShift} ${props.hb_data.hb_blur} ${props.hb_data.hb_color}`
        },
        disclaimer:{
            color: props.hb_data.hb_disclaimer.textColor,
            fontSize: disclaimerFontSize,
            textAlign: props.hb_data.hb_disclaimer.textAlign,
            textShadow: `${props.hb_data.hb_hShift} ${props.hb_data.hb_vShift} ${props.hb_data.hb_blur} ${props.hb_data.hb_color}`
        },
        textField: {
            width: dimensions.width, 
            height: dimensions.height,
            display: 'flex',
            justifyContent: props.hb_data.hb_textFieldAlign,
            alignItems: 'center'
        },
        textContainer:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: textSplit,
            alignItems: 'center'
        }
    }

    function getImageDimensions(){
        return {
            width: imageDimensions.current.offsetWidth,
            height: imageDimensions.current.offsetWidth >= 678 ? 
                (200/1920) * imageDimensions.current.offsetWidth 
                :
                (280/750) * imageDimensions.current.offsetWidth
        }
    }

    useEffect(()=>{
        
        function handleResize() {
            setWidth(window.innerWidth);
        }

        function updateFontSize(){
            if(Math.floor(imageDimensions.current.offsetWidth) >= 678){
                setHeaderFontSize(Math.floor((parseInt(props.hb_data.hb_header.textSize) / 2) + (imageDimensions.current.offsetWidth / 50)) + 'px');
                setSubtextFontSize(Math.floor((parseInt(props.hb_data.hb_subtext.textSize) / 2) + (imageDimensions.current.offsetWidth / 100)) + 'px');
                setDisclaimerFontSize(Math.floor((parseInt(props.hb_data.hb_disclaimer.textSize) / 2) + (imageDimensions.current.offsetWidth / 275)) + 'px');
                setTextSplit('center');
            }else{
                setHeaderFontSize(Math.floor((parseInt(props.hb_data.hb_header.textSize) / 2) + (imageDimensions.current.offsetWidth / 25)) + 'px');
                setSubtextFontSize(Math.floor((parseInt(props.hb_data.hb_subtext.textSize) / 2) + (imageDimensions.current.offsetWidth / 50)) + 'px');
                setDisclaimerFontSize(Math.floor((parseInt(props.hb_data.hb_disclaimer.textSize) / 2) + (imageDimensions.current.offsetWidth / 100)) + 'px');
                setTextSplit('space-evenly');
            }
        }

        handleResize();
        setDimensions(getImageDimensions());
        updateFontSize();

        window.addEventListener('resize', ()=>{
            handleResize();
            setDimensions(getImageDimensions());
            updateFontSize();
        });

        return ()=> {
            window.removeEventListener('readystatechange', ()=> {
                handleResize();
                setDimensions(getImageDimensions());
                updateFontSize();
            });
        }
    }, []);

    return (
        <div className='ge_heroBannerBuilder'>
            <h2 className='ge_heroBannerBuilder-header'>Hero Banner</h2>

            <div className='ge_heroBannerPreview'>

                <img 
                    ref={imageDimensions}
                    className="ge_heroBanner-image"
                    src={width >= 768 ? props.hb_data.hb_desktopImage : props.hb_data.hb_mobileImage}  
                    alt="hero-banner" 
                />

                <div className='ge_heroBannerPreview-textField' style={textStyles.textField}>

                    <div className='ge_heroBannerPreview-textField-container' style={textStyles.textContainer}>

                        <div className='ge_heroBannerPreview-textField-wrapper'>
                            <h1 className='ge_heroBanner-textField-header' style={textStyles.header}>
                                {props.hb_updatePreview('hb_header').text !== '' ? props.hb_updatePreview('hb_header').text : 'Header text here'} 
                            </h1>
                            <p className='ge_heroBanner-textField-subtext' style={textStyles.subtext}>
                                {props.hb_updatePreview('hb_subtext').text !== '' ? props.hb_updatePreview('hb_subtext').text : 'Subtext text here'}
                            </p>
                        </div>

                        <div className='ge_heroBannerPreview-textField-wrapper'>
                            <p className='ge_heroBanner-textField-disclaimer' style={textStyles.disclaimer}>
                                {props.hb_updatePreview('hb_disclaimer').text !== '' ? props.hb_updatePreview('hb_disclaimer').text : 'Disclaimer text here'}
                            </p>
                        </div>

                    </div>

                </div>

            </div>
            
            <div className='ge_heroBannerInputs'>

                <div className='ge_heroBannerInputs-wrapper'>
                    <div className='ge_hb-iw-container'>
                        <label>Desktop Image URL:</label>
                        <input type="url" datatype='hb_desktopImage' className="ge_desktop-input" onChange={(e)=> props.hb_handleInput(e, 'text')}/>
                    </div>
                    <div className='ge_hb-iw-container'>
                        <label>Mobile Image URL:</label>
                        <input type="url" datatype='hb_mobileImage' className="ge_mobile-input" onChange={(e)=> props.hb_handleInput(e, 'text')}/>
                    </div>
                </div>

                <div className='ge_heroBannerInputs-wrapper'>
                    <div className='ge_hb-iw-container'>
                        <label>Header:</label>
                        <input type="text" datatype='hb_header' className="ge_header-input" onChange={(e)=> props.hb_handleInput(e, 'text')}/>
                        <label>font size:</label>
                        <input type='range' datatype='hb_header' min='5' max='90' step='1' 
                                onChange={(e)=> {
                                        props.hb_handleInput(e, 'textSize'); 
                                        setHeaderFontSize(props.hb_data.hb_header.textSize);
                                    }
                                }
                        />
                        <div>
                            <label>text align:</label>
                            <p></p>
                        </div>
                        <select name="" id="">
                            <option value="center">center</option>
                            <option value="left">left</option>
                            <option value="right">right</option>
                        </select>
                    </div>
                    <div className='ge_hb-iw-container'>
                        <label>Subtext:</label>
                        <input type="text" datatype='hb_subtext' className="ge_subtext-input" onChange={(e)=> props.hb_handleInput(e, 'text')}/>
                        <label>font size</label>
                        <input type='range' datatype='hb_subtext' min='5' max='90' step='1' 
                                onChange={(e)=> {
                                        props.hb_handleInput(e, 'textSize'); 
                                        setSubtextFontSize(props.hb_data.hb_subtext.textSize);
                                    }
                                }
                        />
                        <label>text align:</label>
                        <select name="" id="">
                            <option value="center">center</option>
                            <option value="left">left</option>
                            <option value="right">right</option>
                        </select>
                    </div>
                    <div className='ge_hb-iw-container'>
                        <label>Disclaimer:</label>
                        <input type="text" datatype='hb_disclaimer' className="ge_disclaimer-input" onChange={(e)=> props.hb_handleInput(e, 'text')}/>
                        <label>font size</label>
                        <input type='range' datatype='hb_disclaimer' min='5' max='90' step='1' 
                                onChange={(e)=> {
                                        props.hb_handleInput(e, 'textSize'); 
                                        setDisclaimerFontSize(props.hb_data.hb_disclaimer.textSize);
                                    }
                                }
                        />
                        <label>text align:</label>
                        <select name="" id="">
                            <option value="center">center</option>
                            <option value="left">left</option>
                            <option value="right">right</option>
                        </select>
                    </div>
                </div>
                
                <div className='ge_heroBannerInputs-wrapper'>
                    <div className='ge_hb-iw-container-shadow'>
                        <label>Text Shadow:</label>
                        <input type="checkbox" className="ge_toggle-input" onChange={(e)=> setToggle(e.target.checked)}/>
                    </div>
                </div>

                {toggle === true ? 
                    <div className='ge_heroBannerInputs-textShadow'>
                        <input 
                            type="range" 
                            className="ge_hShift-input" 
                            min="-10" 
                            max="10" 
                            step="1"
                            onChange={(e)=> props.hb_updateDisclaimer(e.target.value)}
                        />
                        <input 
                            type="range" 
                            className="ge_vShift-input"
                            min="-10" 
                            max="10" 
                            step="1"
                            onChange={(e)=> props.hb_updateDisclaimer(e.target.value)}
                        />
                        <input 
                            type="range" 
                            className="ge_blur-input" 
                            min="-10" 
                            max="10" 
                            step="1"
                            onChange={(e)=> props.hb_updateDisclaimer(e.target.value)}
                        />
                        <input 
                            type="color" 
                            className="ge_color-input"
                            min="-10" 
                            max="10" 
                            step="1"
                            onChange={(e)=> props.hb_updateDisclaimer(e.target.value)}
                        />
                    </div>
                    : null
                }
            </div>

        </div>
    )
}
