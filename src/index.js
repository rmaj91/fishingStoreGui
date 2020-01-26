import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';

import Clock from './components/Clock'
import UserBox from './components/UserBox'

ReactDOM.render(
  <div id="container">
    <Clock/>
    <UserBox/>
  </div>,
   document.getElementById('root'));
