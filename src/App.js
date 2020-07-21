import React from 'react';
import { Store } from './Store';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import AuthUser from './components/AuthUser/AuthUser';
import LogoutUser from './components/AuthUser/LogoutUser';
import CheckToken from './components/AuthUser/CheckToken';

import NotFound from './components/RouteNotFound/RouteNotFound';
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';

import ExperienceList from './components/ExperienceList/ExperienceList';
import ExperienceDetails from './components/ExperienceDetails/ExperienceDetails';
import ExperienceBuilder from './components/ExperienceBuilder/ExperienceBuilder';

import PromosList from './components/PromosList/PromosList';
import PromoDetails from './components/PromoDetails/PromoDetails';
import PromoBuilder from './components/PromoBuilder/PromoBuilder';

export default function App(props) {

  // function loginUser(email, password){
  //     fetchData().fetchUserData.login({email: email, password: password}, ()=>{
  //       authUser('/dashboard');
  //       setAuth(true);
  //     });
  // }

  // function logoutUser(){
  //   sessionStorage.removeItem('psAuth_token');
  //   setAuth(false);
  //   return <Redirect to="/"/>
  // }

  // function authUser(destination){
  //   let dateNow = new Date();
  //   let token = sessionStorage.getItem('psAuth_token');
  //   let decodedToken = jwt.decode(token, {complete: true});

  //   if(decodedToken && new Date(decodedToken.payload.exp * 1000) > dateNow){
  //     return <Redirect to={destination}/>
  //   }else{
  //     return <Singin loginUser={loginUser}/>
  //   }

  // }

  // function checkToken(){
  //   let dateNow = new Date();
  //   let token = sessionStorage.getItem('psAuth_token');
  //   let decodedToken = jwt.decode(token, {complete: true});

  //   if(decodedToken && new Date(decodedToken.payload.exp * 1000) > dateNow){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  return (
    <div className="App">
      <Store>
        <Router>
          <Switch>
            <Route exact path="/" component={()=> AuthUser() === false ? <Signin/> : <Redirect to='/dashboard'/>}></Route>

            <Route exact path="/logout" component={()=> <Redirect to={LogoutUser()}/>}></Route>

            <Route exact path="/dashboard" component={()=> 
              CheckToken() === true ? <Dashboard/> : <Redirect to="/"/>}>
            </Route>

            {/*EXPERIENCES ROUTES  */}
            <Route exact path="/experiences" component={()=> 
              CheckToken() === true ? <ExperienceList/> : <Redirect to="/"/>}>
            </Route>

            <Route exact path="/experiences/builder" component={()=> 
              CheckToken() === true ? <ExperienceBuilder/> : <Redirect to="/"/>}>
            </Route>

            <Route exact path="/experiences/:id" component={()=> 
              CheckToken() === true ? <ExperienceDetails/> : <Redirect to="/"/>}>
            </Route>

            {/*PROMO ROUTES  */}
            <Route exact path="/promos" component={()=> 
              CheckToken() === true ? <PromosList/> : <Redirect to="/"/>}>
            </Route>

            <Route exact path="/promos/builder" component={()=> 
              CheckToken() === true ? <PromoBuilder/> : <Redirect to="/"/>}>
            </Route>

            <Route exact path="/promos/:id" component={()=> 
              CheckToken() === true ? <PromoDetails/> : <Redirect to="/"/>}>
            </Route>

            <Route render={NotFound}></Route>

          </Switch>
        </Router>
      </Store>
    </div>
  )
}
