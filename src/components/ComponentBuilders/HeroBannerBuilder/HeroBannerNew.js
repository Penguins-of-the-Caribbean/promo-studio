import React, {useState, useEffect, useRef} from 'react';
import './heroBannerBuilder.css';

export default function HeroBannerNew(props) {

    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [dimensions, setDimensions] = useState({width: 0, height: 0});
    const imageDimensions = useRef();

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

        handleResize();
        setDimensions(getImageDimensions());

        window.addEventListener('resize', ()=>{
            handleResize();
            setDimensions(getImageDimensions());
        });

        return ()=> {
            window.removeEventListener('readystatechange', ()=> {
                handleResize();
                setDimensions(getImageDimensions());
            });
        }
    }, []);

    return (
        <div className='ge_heroBannerBuilder'>
            <h2>Hero Banner Builder</h2>

            <div className='ge_heroBannerPreview'>
                <img 
                    ref={imageDimensions}
                    className="ge_heroBanner-image"
                    src={width >= 768 ? props.hb_data.hb_desktopImage : props.hb_data.hb_mobileImage}  
                    alt="hero-banner" 
                />
                <div 
                    className='ge_heroBannerPreview-textField'
                    style={{width:dimensions.width, height:dimensions.height}}
                >
                    <h1 className='ge_heroBanner-textField-header'>{props.hb_data.hb_header.text}</h1>
                    <p className='ge_heroBanner-textField-subtext'>{props.hb_data.hb_subtext.text}</p>
                    <p className='ge_heroBanner-textField-disclaimer'>{props.hb_data.hb_disclaimer.text}</p>
                </div>
            </div>
            
            <div className='ge_heroBannerInputs'>
                <input type="url" className="ge_desktop-input" onChange={(e)=> props.hb_updateDesktop(e.target.value)}/>
                <input type="url" className="ge_mobile-input" onChange={(e)=> props.hb_updateMobile(e.target.value)}/>
                <input type="text" className="ge_header-input" onChange={(e)=> props.hb_updateHeader(e.target.value)}/>
                <input type="text" className="ge_subtext-input" onChange={(e)=> props.hb_updateSubtext(e.target.value)}/>
                <input type="text" className="ge_disclaimer-input" onChange={(e)=> props.hb_updateDisclaimer(e.target.value)}/>
                <input type="checkbox" className="ge_toggle-input" onChange={(e)=> setToggle(e.target.checked)}/>
                {toggle === true ? 
                    <input type="text" className="ge_disclaimer-input" onChange={(e)=> props.hb_updateDisclaimer(e.target.value)}/>
                    : null
                }
            </div>

        </div>
    )
}
