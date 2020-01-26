import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';

import Clock from './components/Clock'
import UserBox from './components/UserBox'
import Logo from './components/Logo'
import TopBar from './sections/Topbar'
import NavSection from './sections/NavSection'
import MainSection from './sections/MainSection'


ReactDOM.render(
  <div id="container">
    <Clock/>
    <UserBox/>
    <Logo/>
    <TopBar/>
    <div id="flexContainer">
      <NavSection/>
      <MainSection/>
    </div>
  </div>,
   document.getElementById('root'));
