import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
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
          name: 'Hero Banner',
          selected: false,
        },
        {
          name: 'Count Down',
          selected: false,
        },
        {
          name: 'Pills',
          selected: false,
        },
        {
          name: 'People Watching',
          selected: false,
        },
        {
          name: 'Exit Popup',
          selected: false,
        },
        {
          name: 'Kids Sail Free',
          selected: false,
        },
        {
          name: 'Promo Code',
          selected: false,
        },
        {
          name: 'IOBD',
          selected: false,
        },
      ]
    };
    this.auth = true;
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
  
  componentSelectorSubmit(){
    console.log(this.state.components);
  }

  render() {
    return (
      <div className="App">
        <Router>
        <Navbar></Navbar>
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
                component={()=>
                  <ComponentSelector>
                    {this.populateComponentSelector(this.state.components)}
                  </ComponentSelector>}>
              </Route>
              <Route 
                path='/builder'
                component={ComponentBuilder}
              >
              </Route>
            </List>
          </Switch>
        </View>
        <Footer></Footer>
      </Router>
      </div>
    )
  }
}




