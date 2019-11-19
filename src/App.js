import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import View from './components/View';
import Footer from './components/Footer';
import Taskbar from './components/Taskbar';
import List from './components/List/';
import AddButton from './components/AddButton';
import ComponentSelector from './components/ComponentSelector';
import ExpComp from './components/ExperienceComponent';
import Button from './components/Button';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      components: [
        {
          name: 'Hero Banner',
          selected: true,
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

  componentSelectorSubmit(){
    let state = this.state.components;
    console.log(state);
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

  render() {
    return (
      <div className="App">
        <Router>
        <Navbar>
          <ul>
            <li><NavLink className='ge_promo-studio-link-a' to='/blah1'>blah1</NavLink></li>
            <li><NavLink className='ge_promo-studio-link-a' to='/blah2'>blah2</NavLink></li>
            <li><NavLink className='ge_promo-studio-link-a' to='/blah3'>blah3</NavLink></li>
            <li><NavLink className='ge_promo-studio-link-a' to='/blah4'>blah4</NavLink></li>
          </ul>
        </Navbar>
        <View>
          <Taskbar>
            <NavLink className='ge_promo-studio-link-a' to='/blah1'>
              <AddButton></AddButton>
            </NavLink>
          </Taskbar>
          <Switch>
            <List>
              <Route  exact path='/blah1' 
                      component={()=>
                                  <ComponentSelector>
                                    {this.populateComponentSelector(this.state.components)}
                                    <div className="ge_submit-button">
                                      <Button click={()=>{this.componentSelectorSubmit(this.state)}}>create experience</Button>
                                    </div>
                                  </ComponentSelector>
                                } 
              />
            </List>
            {/* <PrivateRoute path='/blah2' component={()=><Blah>BLAH-2</Blah>} />
            <Route exact path='/blah3' component={()=><Blah>BLAH-3</Blah>} />
            <Route exact path='/blah4' component={()=><Blah>BLAH-4</Blah>} /> */}
          </Switch>
        </View>
        <Footer></Footer>
      </Router>
      </div>
    )
  }
}




