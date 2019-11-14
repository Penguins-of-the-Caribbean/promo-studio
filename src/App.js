import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';

function poop(){
  console.log('POOP!!!!');
}

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Button onClick={poop} name={'PICKLE RICK!!!'}></Button>
      <Footer></Footer>
    </div>
  );
}

export default App;
