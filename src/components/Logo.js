import React,{Component} from 'react';
import logo from './../images/logo.png';

class Logo extends Component{
  render(){
    return(
      <div id="logo">
        <img src={logo} alt="shop logo"/>
        <h1>Fishing Store</h1>
      </div>
    )
  }
}

export default Logo;
