import React, { useState, useEffect } from 'react';
import loginUser from '../../components/AuthUser/LoginUser'
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
       <div className="sign-in-input-wrapper">
        <input className="sign-in-input" type="email"  placeholder="email" onChange={(e)=> setEmail(e.target.value)}/> 
       </div>
       <div className="sign-in-input-wrapper">
        <input className="sign-in-input" type="password"  placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
       </div>
        <button className="btn-long purple-bg bld-xl off-white-txt fnt-m uppercase" onClick={()=> loginUser(email, password, props.history)}>Sign in</button>
      </div>
    </div>
  )
}