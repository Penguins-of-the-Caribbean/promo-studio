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
    this.state = {}

    this.loginUser = this.loginUser.bind(this);

  }

  authConfig(){
    return {Authorization: `Bearer ${sessionStorage.getItem('psAuth_token')}`}
  }

  // fetchExperienceData(){

  //   componentWillMount(){
  //     axios.get('/experince/read', this.authConfig())
  //       .then((res)=>{
  //         console.log(res.data);
  //       }) 
  //       .catch((error)=>{
  //         console.log(error);
  //       })
  //   }

  // }

  loginUser(email, password){

    if(email && password){

      axios.post('http://localhost:4000/user/login', {email: email, password: password})
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
            <Route exact path="/dashboard" render={()=> this.checkToken() === true ? <Dashboard/> : <Redirect to="/"/>}></Route>
            <Route render={NotFound}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}