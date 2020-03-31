import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

import NotFound from './components/RouteNotFound/RouteNotFound';
import Singin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paths: {
        components:{
          create: 'http://localhost:4000/component/create', 
          read: 'http://localhost:4000/component/read',
          update: 'http://localhost:4000/component/update',
          delete: 'http://localhost:4000/component/delete',
        },
        experiences:{
          create: 'http://localhost:4000/experience/create', 
          read: 'http://localhost:4000/experience/read',
          update: 'http://localhost:4000/experience/update',
          delete: 'http://localhost:4000/experience/delete',
        },
        markets:{
          create: 'http://localhost:4000/market/create', 
          read: 'http://localhost:4000/market/read',
          update: 'http://localhost:4000/market/update',
          delete: 'http://localhost:4000/market/delete',
        },
        offers:{
          create: 'http://localhost:4000/offer/create', 
          read: 'http://localhost:4000/offer/read',
          update: 'http://localhost:4000/offer/update',
          delete: 'http://localhost:4000/offer/delete',
        },
        ports:{
          create: 'http://localhost:4000/port/create', 
          read: 'http://localhost:4000/port/read',
          update: 'http://localhost:4000/port/update',
          delete: 'http://localhost:4000/port/delete',
        },
        ships:{
          create: 'http://localhost:4000/ship/create', 
          read: 'http://localhost:4000/ship/read',
          update: 'http://localhost:4000/ship/update',
          delete: 'http://localhost:4000/ship/delete',
        },
        // terms:{
        //   create: 'http://localhost:4000/terms/create', 
        //   read: 'http://localhost:4000/terms/read',
        //   update: 'http://localhost:4000/terms/update',
        //   delete: 'http://localhost:4000/terms/delete',
        // },
        users:{
          create: 'http://localhost:4000/user/create', 
          read: 'http://localhost:4000/user/read',
          update: 'http://localhost:4000/user/update',
          delete: 'http://localhost:4000/user/delete',
          login: 'http://localhost:4000/user/login',
        }
      }
    }

    this.loginUser = this.loginUser.bind(this);

  }

  getData(){
    return this.state.data;
  }

  authConfig(){
    return {headers: {"Authorization": `Bearer ${sessionStorage.getItem('psAuth_token')}`}}
  }

  loginUser(email, password, cb){

    if(email && password){

      axios.post(this.state.paths.users.login, {email: email, password: password})
      .then((res)=>{

        if(res.data.auth === true){

          let authClone = {...this.state.auth};

          authClone = res.data.auth;

          sessionStorage.setItem('psAuth_token', res.data.token);

          this.setState({auth: authClone});
          this.authUser('/dashboard');

        }

      })
      .catch((err)=>{
        console.log(err);
      });

    }

  }

  logoutUser(){
    sessionStorage.removeItem('psAuth_token');
    return <Redirect to="/"/>
  }

  authUser(destination){
    let dateNow = new Date();
    let token = sessionStorage.getItem('psAuth_token');
    let decodedToken = jwt.decode(token, {complete: true});

    if(decodedToken && new Date(decodedToken.payload.exp * 1000) > dateNow){
      return <Redirect to={destination}/>
    }else{
      return <Singin signin={this.loginUser}/>
    }

  }

  checkToken(){
    let dateNow = new Date();
    let token = sessionStorage.getItem('psAuth_token');
    let decodedToken = jwt.decode(token, {complete: true});

    if(decodedToken && new Date(decodedToken.payload.exp * 1000) > dateNow){
      return true;
    }else{
      return false;
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={()=> this.authUser('/dashboard')}></Route>
            <Route exact path="/logout" render={()=> this.logoutUser()}></Route>
            <Route exact path="/dashboard" render={()=> 
              this.checkToken() === true ? <Dashboard paths={this.state.paths} config={this.authConfig()}/> : <Redirect to="/"/>}>
            </Route>
            <Route exact path="/experiences" render={()=> 
              this.checkToken() === true ? <Dashboard paths={this.state.paths} config={this.authConfig()}/> : <Redirect to="/"/>}>
            </Route>
            <Route render={NotFound}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}