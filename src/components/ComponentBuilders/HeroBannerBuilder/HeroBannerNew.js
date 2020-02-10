import React, {useState, useEffect, useRef} from 'react';
import './heroBannerBuilder.css';
import HeroEditor from './HeroBannerEditor';
import TextFieldEditor from '../../TextFieldEditor/TextFieldEditor';

// export default function HeroBannerNew(props) {

//     const [toggle, setToggle] = useState(false);
//     const [width, setWidth] = useState(window.innerWidth);
//     const [dimensions, setDimensions] = useState({width: 0, height: 0});
//     const imageDimensions = useRef();

//     const [headerTextVis, setHeaderTextVis] = useState('true');
//     const [subtextTextVis, setSubtextTextVis] = useState('true');
//     const [disclaimerTextVis, setDisclaimerTextVis] = useState('true');

//     const [headerFontSize, setHeaderFontSize] = useState('');
//     const [subtextFontSize, setSubtextFontSize] = useState('');
//     const [disclaimerFontSize, setDisclaimerFontSize] = useState('');

//     const [headerAlign, setHeaderAlign] = useState('center');
//     const [subtextAlign, setSubtextAlign] = useState('center');
//     const [disclaimerAlign, setDisclaimerAlign] = useState('center');

//     const [textSplit, setTextSplit] = useState('');
//     const [textFieldAlign, setTextFieldAlign] = useState('center');

//     const textStyles = {
//         header:{
//             display: headerTextVis === 'true' ? 'flex' : 'none',
//             justifyContent: props.hb_data.hb_header.textAlign,
//             color: props.hb_data.hb_header.textColor,
//             fontSize: headerFontSize+'px',
//             textAlign: headerAlign,
//             textShadow: `${props.hb_data.hb_hShift}px ${props.hb_data.hb_vShift}px ${props.hb_data.hb_blur}px ${props.hb_data.hb_color}`
//         },
//         subtext:{
//             display: subtextTextVis === 'true' ? 'flex' : 'none',
//             justifyContent: props.hb_data.hb_subtext.textAlign,
//             color: props.hb_data.hb_subtext.textColor,
//             fontSize: subtextFontSize+'px',
//             textAlign: 'right',
//             textShadow: `${props.hb_data.hb_hShift}px ${props.hb_data.hb_vShift}px ${props.hb_data.hb_blur}px ${props.hb_data.hb_color}`
//         },
//         disclaimer:{
//             display: disclaimerTextVis === 'true' ? 'flex' : 'none',
//             justifyContent: props.hb_data.hb_disclaimer.textAlign,
//             color: props.hb_data.hb_disclaimer.textColor,
//             fontSize: disclaimerFontSize+'px',
//             textAlign: disclaimerAlign,
//             textShadow: `${props.hb_data.hb_hShift}px ${props.hb_data.hb_vShift}px ${props.hb_data.hb_blur}px ${props.hb_data.hb_color}`
//         },
//         textField: {
//             width: dimensions.width, 
//             height: dimensions.height,
//             display: 'flex',
//             justifyContent: textFieldAlign
//         },
//         textContainer:{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: textSplit,
//             alignItems: 'center'
//         }
//     }

//     function getImageDimensions(){
//         return {
//             width: imageDimensions.current.offsetWidth,
//             height: imageDimensions.current.offsetWidth >= 678 ? 
//                 (200/1920) * imageDimensions.current.offsetWidth 
//                 :
//                 (280/750) * imageDimensions.current.offsetWidth
//         }
//     }

//     useEffect(()=>{
        
//         function handleResize() {
//             setWidth(window.innerWidth);
//         }

//         function updateFontSize(){
//             if(Math.floor(imageDimensions.current.offsetWidth) >= 678){
//                 setHeaderFontSize(Math.floor((parseInt(props.hb_data.hb_header.textSize) / 2) + (imageDimensions.current.offsetWidth / 50)));
//                 setSubtextFontSize(Math.floor((parseInt(props.hb_data.hb_subtext.textSize) / 2) + (imageDimensions.current.offsetWidth / 100)));
//                 setDisclaimerFontSize(Math.floor((parseInt(props.hb_data.hb_disclaimer.textSize) / 2) + (imageDimensions.current.offsetWidth / 275)));
//                 setTextSplit('center');
//             }else{
//                 setHeaderFontSize(Math.floor((parseInt(props.hb_data.hb_header.textSize) / 2) + (imageDimensions.current.offsetWidth / 25)));
//                 setSubtextFontSize(Math.floor((parseInt(props.hb_data.hb_subtext.textSize) / 2) + (imageDimensions.current.offsetWidth / 50)));
//                 setDisclaimerFontSize(Math.floor((parseInt(props.hb_data.hb_disclaimer.textSize) / 2) + (imageDimensions.current.offsetWidth / 100)));
//                 setTextSplit('space-evenly');
//             }
//         }

//         handleResize();
//         setDimensions(getImageDimensions());
//         updateFontSize();

//         window.onresize = ()=>{
//             handleResize();
//             setDimensions(getImageDimensions());
//             updateFontSize();
//         }
//     }, []);

//     return (
//         <div className='ge_heroBannerBuilder'>
//             <h2 className='ge_heroBannerBuilder-header'>Hero Banner</h2>

//             <div className='ge_heroBannerPreview'>

//                 <img 
//                     ref={imageDimensions}
//                     className="ge_heroBanner-image"
//                     src={width >= 768 ? props.hb_data.hb_desktopImage : props.hb_data.hb_mobileImage}  
//                     alt="hero-banner" 
//                 />

//                 <div className='ge_heroBannerPreview-textField' style={textStyles.textField}>
//                     <div className='ge_heroBannerPreview-textField-container' style={textStyles.textContainer}>

//                         <div className='ge_heroBannerPreview-textField-wrapper'>
//                             <h1 className='ge_heroBanner-textField-header' style={textStyles.header}>
//                                 {props.hb_updatePreview('hb_header').text !== '' ? props.hb_updatePreview('hb_header').text : 'Header text here'} 
//                             </h1>
//                             <p className='ge_heroBanner-textField-subtext' style={textStyles.subtext}>
//                                 {props.hb_updatePreview('hb_subtext').text !== '' ? props.hb_updatePreview('hb_subtext').text : 'Subtext text here'}
//                             </p>
//                         </div>

//                         <div className='ge_heroBannerPreview-textField-wrapper'>
//                             <p className='ge_heroBanner-textField-disclaimer' style={textStyles.disclaimer}>
//                                 {props.hb_updatePreview('hb_disclaimer').text !== '' ? props.hb_updatePreview('hb_disclaimer').text : 'Disclaimer text here'}
//                             </p>
//                         </div>

//                     </div>
//                 </div>

//             </div>
            
//             <div className='ge_heroBannerInputs'>

//                 <div className='ge_heroBannerInputs-wrapper'>
//                     <div className='ge_hb-iw-container'>
//                         <label>Desktop Image URL:</label>
//                         <input type="url" datatype='hb_desktopImage' className="ge_desktop-input" onChange={(e)=> props.hb_handleInput(e, 'text')}/>
//                     </div>
//                     <div className='ge_hb-iw-container'>
//                         <label>Mobile Image URL:</label>
//                         <input type="url" datatype='hb_mobileImage' className="ge_mobile-input" onChange={(e)=> props.hb_handleInput(e, 'text')}/>
//                     </div>
//                 </div>

//                 <div className='ge_heroBannerInputs-wrapper'>

//                     <div className='ge_hb-iw-container'>
//                         <label>Header:</label>
//                         <input type="text" datatype='hb_header' className="ge_header-input" onChange={(e)=> props.hb_handleInput(e, 'text')}/>
//                         <label>text color</label>
//                         <input type="color"
//                             datatype='hb_header' 
//                             value={props.hb_updatePreview('hb_header').textColor}
//                             onChange={(e)=>{
//                                 props.hb_handleInput(e, 'textColor');
//                             }}
//                         />
//                         <label>font size: <span>{props.hb_updatePreview('hb_header').textSize}</span>px</label>
//                         <input type='range' datatype='hb_header' min='5' max='90' step='1'
//                                 value={props.hb_updatePreview('hb_header').textSize} 
//                                 onChange={(e)=> {
//                                         props.hb_handleInput(e, 'textSize'); 
//                                         setHeaderFontSize(props.hb_data.hb_header.textSize);
//                                     }
//                                 }
//                         />
//                         <label>visibility:</label>
//                         <select onChange={(e)=> setHeaderTextVis(e.target.value)}>
//                             <option value={true}>Show</option>
//                             <option value={false}>Hide</option>
//                         </select>
//                     </div>

//                     <div className='ge_hb-iw-container'>
//                         <label>Subtext:</label>
//                         <input type="text" datatype='hb_subtext' className="ge_subtext-input" onChange={(e)=> props.hb_handleInput(e, 'text')}/>
//                         <label>text color</label>
//                         <input type="color"/>
//                         <label>font size</label>
//                         <input type='range' datatype='hb_subtext' min='5' max='90' step='1' 
//                                 onChange={(e)=> {
//                                         props.hb_handleInput(e, 'textSize'); 
//                                         setSubtextFontSize(props.hb_data.hb_subtext.textSize);
//                                     }
//                                 }
//                         />
//                         <label>visibility:</label>
//                         <select onChange={(e)=> setSubtextTextVis(e.target.value)}>
//                             <option value={true}>Show</option>
//                             <option value={false}>Hide</option>
//                         </select>
//                     </div>

//                     <div className='ge_hb-iw-container'>
//                         <label>Disclaimer:</label>
//                         <input type="text" datatype='hb_disclaimer' className="ge_disclaimer-input" onChange={(e)=> props.hb_handleInput(e, 'text')}/>
//                         <label>text color</label>
//                         <input type="color"/>
//                         <label>font size</label>
//                         <input type='range' datatype='hb_disclaimer' min='5' max='90' step='1' 
//                                 onChange={(e)=> {
//                                         props.hb_handleInput(e, 'textSize'); 
//                                         setDisclaimerFontSize(props.hb_data.hb_disclaimer.textSize);
//                                     }
//                                 }
//                         />
//                         <label>visibility:</label>
//                         <select onChange={(e)=> setDisclaimerTextVis(e.target.value)}>
//                             <option value={true}>Show</option>
//                             <option value={false}>Hide</option>
//                         </select>
//                     </div>

//                 </div>
                
//                 <div className='ge_heroBannerInputs-wrapper'>
//                     <div className='ge_hb-iw-container-shadow'>
//                         <label>Text Shadow:</label>
//                         <input type="checkbox" className="ge_toggle-input" onChange={(e)=> setToggle(e.target.checked)}/>
//                     </div>

//                     <div className='ge_hb-iw-container-shadow'>
//                         <label>Textfield Align:</label>
//                         <select datatype='hb_textFieldAlign' onChange={(e)=>{
//                             props.hb_handleInput(e);
//                             setTextFieldAlign(e.target.value);
//                             }
//                         }>
//                             <option value="center">Center</option>
//                             <option value="left">Left</option>
//                             <option value="right">Right</option>
//                         </select>
//                     </div>
//                 </div>

//                 {toggle === true ? 
//                     <div className='ge_heroBannerInputs-textShadow'>
//                         <div className='ge_heroBannerInputs-textShadow-wrapper'>
//                             <div className='ge_hb-iw-container-sh'>
//                                 <label>horizontal shift: <span>{props.hb_updatePreview('hb_hShift')}</span>px</label>
//                                 <input 
//                                     type="range" 
//                                     className="ge_hShift-input" 
//                                     min="0" 
//                                     max="50" 
//                                     step="1"
//                                     value={props.hb_updatePreview('hb_hShift')}
//                                     onChange={(e)=> props.hb_handleShdowInput(e, 'hb_hShift')}
//                                 />
//                             </div>
//                             <div className='ge_hb-iw-container-sh'>
//                                 <label>vertical shift: <span>{props.hb_updatePreview('hb_vShift')}</span>px</label>
//                                 <input 
//                                     type="range" 
//                                     className="ge_vShift-input"
//                                     min="0" 
//                                     max="50" 
//                                     step="1"
//                                     value={props.hb_updatePreview('hb_vShift')}
//                                     onChange={(e)=> props.hb_handleShdowInput(e, 'hb_vShift')}
//                                 />
//                             </div>
//                             <div className='ge_hb-iw-container-sh'>
//                                 <label>blur offset: <span>{props.hb_updatePreview('hb_blur')}</span>px</label>
//                                 <input 
//                                     type="range" 
//                                     className="ge_blur-input" 
//                                     min="0" 
//                                     max="50" 
//                                     step="1"
//                                     value={props.hb_updatePreview('hb_blur')}
//                                     onChange={(e)=> props.hb_handleShdowInput(e, 'hb_blur')}
//                                 />
//                             </div>
//                             <div className='ge_hb-iw-container-sh'>
//                                 <label>color: <span>{props.hb_updatePreview('hb_color')}</span></label>
//                                 <input 
//                                     type="color" 
//                                     className="ge_color-input"
//                                     value={props.hb_updatePreview('hb_color')}
//                                     onChange={(e)=> props.hb_handleShdowInput(e, 'hb_color')}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     : null
//                 }
//             </div>

//         </div>
//     )
// }


export default function HeroBannerNew(props) {

    const [dimensions, setDimensions] = useState({width: 0, height: 0});
    const [image, setImage] = useState('');
    const imageDimensions = useRef();

    const [headerFontSize, setHeaderFontSize] = useState('');
    const [subtextFontSize, setSubtextFontSize] = useState('');
    const [disclaimerFontSize, setDisclaimerFontSize] = useState('');

    const [textSplit, setTextSplit] = useState('');
    const [textFieldAlign, setTextFieldAlign] = useState('center');

    const [inputToggle, setInputToggle] = useState(false);
    const [validInput, setValidInput] = useState(false);

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
        setDimensions(getImageDimensions());

        function handleImage(){
            if(imageDimensions.current.offsetWidth >=678){
                setImage(props.hb_data.hb_desktopImage);
            }else{
                setImage(props.hb_data.hb_mobileImage);
            }
        }

        function updateFontSize(){
            if(Math.floor(imageDimensions.current.offsetWidth) >= 678){
                setHeaderFontSize(Math.floor((parseInt(props.hb_data.hb_header.textSize) / 2) + (imageDimensions.current.offsetWidth / 50)));
                setSubtextFontSize(Math.floor((parseInt(props.hb_data.hb_subtext.textSize) / 2) + (imageDimensions.current.offsetWidth / 100)));
                setDisclaimerFontSize(Math.floor((parseInt(props.hb_data.hb_disclaimer.textSize) / 2) + (imageDimensions.current.offsetWidth / 275)));
                setTextSplit('center');
            }else{
                setHeaderFontSize(Math.floor((parseInt(props.hb_data.hb_header.textSize) / 4) + (imageDimensions.current.offsetWidth / 25)));
                setSubtextFontSize(Math.floor((parseInt(props.hb_data.hb_subtext.textSize) / 4) + (imageDimensions.current.offsetWidth / 50)));
                setDisclaimerFontSize(Math.floor((parseInt(props.hb_data.hb_disclaimer.textSize) / 2) + (imageDimensions.current.offsetWidth / 100)));
                setTextSplit('space-evenly');
            }
        }

        handleImage();
        updateFontSize();
        setDimensions(getImageDimensions());

        window.onresize = ()=>{
            handleImage();
            updateFontSize();
            setDimensions(getImageDimensions());
        }
    }, []);
    
    const style = {
        heroBannerContainer:{
            width: '100%',
            height: 'auto',
            padding: '0px',
            margin: '0px',
            float: 'left',
            display: 'flex',
            justifyContent: 'left',
        },
        previewPanel: {
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: dimensions.height + 'px',
            padding: '0px',
            margin: '0px',
            float: 'left',
        },
        textField: {
            // background: 'rgba(0, 0, 255, 0.5)',
            width: '100%',
            height: dimensions.height + 'px',
            color: '#ffffff',
            textAlign: 'center', //text field align here
            padding: '0px 0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: textSplit, //split the text field here
            alignItems: 'center',
        },
        text:{
            // background: 'magenta',
            width: '100%',
        },
        header:{
            padding: '5px 50px',
            margin: '0px',
            fontSize: headerFontSize,
            textTransform : 'uppercase',
        },
        subtext:{
            padding: '5px 50px',
            margin: '0px',
            fontSize: subtextFontSize,
            textTransform : 'uppercase',
        },
        disclaimer:{
            padding: '5px 50px',
            margin: '0px',
            fontSize: disclaimerFontSize,
        },
        inputContainer:{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        input: {
            background: 'transparent',
            width: '100%',
            height: 'auto',
            border: 'none',
            fontSize: headerFontSize,
            textAlign: 'center',
            color: '#ffffff',
        },
        button: {
            background: 'transparent',
            margin: '0px',
            padding: '0px',
            border: 'none',
            zIndex: '999',
            cursor: 'pointer',
        },
        check: {
            color: '#7CFC00',
        },
        close: {
            color: 'red',
        }
    }

    return (
        <div className='ge_heroBannerBuilder' style={style.heroBannerContainer}>

            <div ref={imageDimensions} style={style.previewPanel}>
                <div style={style.textField}>
                    <div style={style.text}>
                        {inputToggle === false ? 
                            <h1 onClick={(e)=> setInputToggle({status: true, content:e.target.innerText})} style={style.header}>
                                {props.hb_data.hb_header.text ? props.hb_data.hb_header.text : 'HEADER TEXT GOES HERE'}
                            </h1>
                            :
                            <TextFieldEditor {...props} fontSize={headerFontSize} setInputToggle={setInputToggle}/>
                        }
                        <p style={style.subtext}>{props.hb_data.hb_subtext.text ? props.hb_data.hb_subtext.text : 'SUBTEXT GOES HERE'}</p>
                    </div>
                    <div style={style.text}>
                        <p style={style.disclaimer}>{props.hb_data.hb_disclaimer.text ? props.hb_data.hb_disclaimer.text : 'Disclaimer goes here'}</p>
                    </div>
                </div>
            </div>

            <div className='ge_heroBanner-editor-panel'>
                <HeroEditor></HeroEditor>
            </div>
        </div>
    )
}

