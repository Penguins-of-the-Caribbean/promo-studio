import React from 'react'
import { BrowserRouter as Redirect} from 'react-router-dom';
import fetchData from '../../utils/fetch/FetchData';


export default function LoginUser(email, password){
    fetchData().fetchUserData.login({email: email, password: password}, ()=>{
      return(<Redirect to="/dashboard"/>)
    });
}