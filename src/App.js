import React, { useState, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

import {Store, DataContext, PathsContext} from './Store';
import NotFound from './components/RouteNotFound/RouteNotFound';
import Singin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';
import ExperienceList from './components/ExperienceList/ExperienceList';

export default function App(props) {
  
  const paths = useContext(PathsContext);
  const data = useContext(DataContext);
  const [auth, setAuth] = useState(false);

  function authConfig(){
    return {headers: {"Authorization": `Bearer ${sessionStorage.getItem('psAuth_token')}`}}
  }

  function loginUser(email, password){
    if(email && password){
      axios.post(paths.users.login, {email: email, password: password})
      .then((res)=>{
        if(res.data.auth === true){
          sessionStorage.setItem('psAuth_token', res.data.token);
          authUser('/dashboard');
          setAuth(true);
        }
      })
      .catch((err)=>{
        console.log(err);
      });
    }
  }

  function logoutUser(){
    sessionStorage.removeItem('psAuth_token');
    return <Redirect to="/"/>
  }

  function authUser(destination){
    let dateNow = new Date();
    let token = sessionStorage.getItem('psAuth_token');
    let decodedToken = jwt.decode(token, {complete: true});

    if(decodedToken && new Date(decodedToken.payload.exp * 1000) > dateNow){
      return <Redirect to={destination}/>
    }else{
      return <Singin loginUser={loginUser}/>
    }

  }

  function checkToken(){
    let dateNow = new Date();
    let token = sessionStorage.getItem('psAuth_token');
    let decodedToken = jwt.decode(token, {complete: true});

    if(decodedToken && new Date(decodedToken.payload.exp * 1000) > dateNow){
      return true;
    }else{
      return false;
    }
  }

  return (
    <div className="App">
      <Store>
        <Router>
          <Switch>
            <Route exact path="/" render={()=> authUser('/dashboard')}></Route>

            <Route exact path="/logout" component={()=> logoutUser()}></Route>

            <Route exact path="/dashboard" component={()=> 
              checkToken() === true ? <Dashboard paths={paths} config={authConfig()}/> : <Redirect to="/"/>}>
            </Route>

            <Route exact path="/experiences" component={()=> 
              checkToken() === true ? <ExperienceList/> : <Redirect to="/"/>}>
            </Route>

            <Route render={NotFound}></Route>

          </Switch>
        </Router>
      </Store>
    </div>
  )
}
