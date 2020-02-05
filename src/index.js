import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';

import Clock from './components/Clock'
import UserBox from './components/UserBox'
import Logo from './components/Logo'
import MainContainer from './sections/MainContainer'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route path="/*">
      <div id="container">
        <Clock/>
        <UserBox/>
        <Logo/>
        <MainContainer/>
        <Footer/>
      </div>
    </Route>
  </Router>
  ,
   document.getElementById('root'));
