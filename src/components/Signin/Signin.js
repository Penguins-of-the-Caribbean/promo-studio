import React, { useState} from 'react';

export default function Signin(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>SING IN</h1>
      <input type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
      <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
      <button onClick={()=>  props.loginUser(email, password)}>Sing in</button>
    </div>
  )
}
