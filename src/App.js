import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import View from './components/View';
import Footer from './components/Footer';
import Taskbar from './components/Taskbar';
import List from './components/List/';
import AddButton from './components/AddButton';
import ComponentSelector from './components/ComponentSelector';

let myAuth = {isAuth: false};

console.log(myAuth);

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        myAuth.isAuth ? <Component {...innerProps} /> : <Redirect to="/" />
      }
    />
  );
};

const logit = () => {
  console.log('Log it!!!');
};

function App() {
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
              <Route exact path='/blah1' component={()=><ComponentSelector/>} />
            </List>
            {/* <PrivateRoute path='/blah2' component={()=><Blah>BLAH-2</Blah>} />
            <Route exact path='/blah3' component={()=><Blah>BLAH-3</Blah>} />
            <Route exact path='/blah4' component={()=><Blah>BLAH-4</Blah>} /> */}
          </Switch>
        </View>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
