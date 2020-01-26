import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';

import Clock from './components/Clock'
import UserBox from './components/UserBox'
import Logo from './components/Logo'
import TopBar from './sections/Topbar'


ReactDOM.render(
  <div id="container">
    <Clock/>
    <UserBox/>
    <Logo/>
    <TopBar/>
  </div>,
   document.getElementById('root'));
