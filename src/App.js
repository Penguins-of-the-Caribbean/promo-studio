import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import View from './components/View';
import Footer from './components/Footer';
import Taskbar from './components/Taskbar';
import AddButton from './components/AddButton';
import List from './components/List/';
import ComponentSelector from './components/ComponentSelector';
import ComponentBuilder from './components/ComponentBuilder';
import ExpComp from './components/ExperienceComponent';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          id: 'heroBanner',
          name: 'Hero Banner',
          selected: false,
        },
        {
          id: 'countDown',
          name: 'Count Down',
          selected: false,
        },
        {
          id: 'pills',
          name: 'Pills',
          selected: false,
        },
        {
          id: 'peopleWatching',
          name: 'People Watching',
          selected: false,
        },
        {
          id: 'exitPopup',
          name: 'Exit Popup',
          selected: false,
        },
        {
          id: 'ksf',
          name: 'Kids Sail Free',
          selected: false,
        },
        {
          id: 'promoCode',
          name: 'Promo Code',
          selected: false,
        },
        {
          id: 'iobd',
          name: 'IOBD',
          selected: false,
        },
      ]
    };
  }

  populateComponentSelector(components){
    return components.map((component, i)=>{
      return (
        <ExpComp 
          key={i} 
          check={(e)=>{this.addSelectedComponents(e, i)}} 
          isChecked={this.checkSelectedComponent(this.state.components[i])}
        >
          {component.name}
        </ExpComp>
      );
    });
  }
  
  addSelectedComponents(e, i){
    
    let cloneComponents = [...this.state.components];
    
    if(e.target.checked === true){
      cloneComponents[i].selected = true;
    }else if(e.target.checked ===  false){
      cloneComponents[i].selected = false;
    }
    
    this.setState({components: cloneComponents});
    
  }
  
  checkSelectedComponent(component){
    if(component.selected === true){
      return true;
    }else{
      return false;
    }
  }
  
  componentSelectorAuth(){
    let values = this.state.components.map((comp)=>{
      return comp.selected;
    });

    if(values.indexOf(true) !== -1){
      return true;
    }else{
      return false;
    }

  }

  setAuth(value){
    this.setState({auth: value});
  }

  componentSelectorData(){

    let components = {};

    this.state.components.forEach((comp)=>{
      if(comp.selected === true){
        Object.assign(components[comp.id] = true);
      }
    });

    return components;

  }

  render() {
    return (
      <div className="App">
        <Router>
        <Navbar/>
        <View>
          <Taskbar>
              <NavLink className='ge_promo-studio-link-a' to='/selector'>
                  <AddButton></AddButton>
              </NavLink>
          </Taskbar>
          <Switch>
            <List>
              <Route
                path='/selector' 
                component={(props)=>
                  <ComponentSelector {...props} auth={()=>this.componentSelectorAuth()}>
                    {this.populateComponentSelector(this.state.components)}
                  </ComponentSelector>}>
              </Route>
              <Route
                path='/builder'
                component={()=> 
                    Object.values(this.componentSelectorData()).length !== 0 ? 
                    <ComponentBuilder data={this.componentSelectorData()}/> : 
                    <Redirect to='/'/>
                  }
              >
              </Route>
            </List>
          </Switch>
        </View>
        <Footer/>
      </Router>
      </div>
    )
  }
}

