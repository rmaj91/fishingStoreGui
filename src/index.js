import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';

import Clock from './components/Clock'
import UserBox from './components/UserBox'
import Logo from './components/Logo'
import TopBar from './sections/Topbar'
import Menu from './components/Menu'
import MainSection from './sections/MainSection'

let horizontalMenus =['News','Discount','About Us']
let verticalMenus = ['All Categories','Rods','Reels','Baits']

ReactDOM.render(
  <div id="container">
    <Clock/>
    <UserBox/>
    <Logo/>
    <Menu id="horizontalMenu" menus={horizontalMenus}/>
    <TopBar/>
    <div id="flexContainer">
      <Menu id="verticalMenu" menus={verticalMenus}/>
      <MainSection/>
    </div>
  </div>,
   document.getElementById('root'));
