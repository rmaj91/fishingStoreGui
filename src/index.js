import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';

import Clock from './components/Clock'
import UserBox from './components/UserBox'
import Logo from './components/Logo'


ReactDOM.render(
  <div id="container">
    <Clock/>
    <UserBox/>
    <Logo/>
  </div>,
   document.getElementById('root'));
