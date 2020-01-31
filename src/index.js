import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';

import Clock from './components/Clock'
import UserBox from './components/UserBox'
import Logo from './components/Logo'
import MainContainer from './sections/MainContainer'
import Footer from './components/Footer'

ReactDOM.render(
  <div id="container">
    <Clock/>
    <UserBox/>
    <Logo/>
    <MainContainer/>
    <Footer/>
  </div>,
   document.getElementById('root'));
