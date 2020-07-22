import React from 'react';
import { Store } from './Store';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import AuthUser from './components/AuthUser/AuthUser';
import LogoutUser from './components/AuthUser/LogoutUser';

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

  return (
    <div className="App">
      <Store>
        <Router>
          <Switch>
            <Route exact path="/" component={(props)=> 
              AuthUser() === false ? <Signin {...props}/> : <Redirect to='/dashboard'/>}>
            </Route>

            <Route exact path="/logout" component={()=> <Redirect to={LogoutUser()}/>}></Route>

            <Route exact path="/dashboard" component={()=> 
              AuthUser() === true ? <Dashboard/> : <Redirect to="/"/>}>
            </Route>

            {/*EXPERIENCES ROUTES  */}
            <Route exact path="/experiences" component={()=> 
              AuthUser() === true ? <ExperienceList/> : <Redirect to="/"/>}>
            </Route>

            <Route exact path="/experiences/builder" component={()=> 
              AuthUser() === true ? <ExperienceBuilder/> : <Redirect to="/"/>}>
            </Route>

            <Route exact path="/experiences/:id" component={()=> 
              AuthUser() === true ? <ExperienceDetails/> : <Redirect to="/"/>}>
            </Route>

            {/*PROMO ROUTES  */}
            <Route exact path="/promos" component={()=> 
              AuthUser() === true ? <PromosList/> : <Redirect to="/"/>}>
            </Route>

            <Route exact path="/promos/builder" component={()=> 
              AuthUser() === true ? <PromoBuilder/> : <Redirect to="/"/>}>
            </Route>

            <Route exact path="/promos/:id" component={()=> 
              AuthUser() === true ? <PromoDetails/> : <Redirect to="/"/>}>
            </Route>

            <Route render={NotFound}></Route>

          </Switch>
        </Router>
      </Store>
    </div>
  )
}
