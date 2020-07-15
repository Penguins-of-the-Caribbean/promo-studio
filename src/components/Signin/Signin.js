import React, { useState} from 'react';
import './Signin.css';
import '../../Theme/Theme.css';

export default function Signin(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="sign-in-container">
      <div className="card-alt">
        <h1 className="header fnt-xxl ps-header">PROMO STUDIO</h1>
      </div>
      <div className="card sign-in-container">
        <input className="input" type="email"  placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
        <input className="input" type="password"  placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
        <button className="btn-long purple-bg bld-xl off-white-txt fnt-m uppercase" onClick={()=>  props.loginUser(email, password)}>Sign in</button>
      </div>
    </div>
  )
}
