import React, {useState} from 'react';

export default function TextFieldEditor(props) {

    const [validInput, setValidInput] = useState(false);

    const style = {
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
            fontSize: props.fontSize,
            textAlign: 'center',
            color: '#ffffff',
            textTransform: 'uppercase',
        },
        disclaimerInput: {
            background: 'transparent',
            width: '100%',
            height: 'auto',
            border: 'none',
            fontSize: props.fontSize,
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
        <div style={style.inputContainer}>
            <input
                style={props.type === 'hb_header' || props.type === 'hb_subtext' ? style.input : style.disclaimerInput} 
                placeholder={props.hb_data[props.type].text ? props.hb_data[props.type].text : 'HEADER TEXT GOES HERE'} 
                type="text" datatype={props.type}
                onChange={(e)=> {props.hb_handleInput(e, 'text'); setValidInput(e.target.value.length >= 1 ? true : false)}}
            />
            <button style ={style.button} onClick={()=> props.setInputToggle(false)}>
                {validInput === false ?
                    <i style={style.close} className="far fa-times-circle fa-2x"></i>
                    :
                    <i style={style.check} className="fas fa-check-circle fa-2x"></i>
                }
            </button>
        </div>
    )
}
