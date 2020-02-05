import React,{Component} from 'react'
import Loginbox from './../components/LoginBox'
import shoppingCart from './../images/shoppingCart.png';
import {Link} from "react-router-dom";

class UserBox extends Component{
  render(){
    return(
      <div id="userBox">
        <img src={shoppingCart} alt="shopping cart"/>
        <Loginbox/>
        <Link to="register">Join us!</Link>
      </div>
    )
  }
}

export default  UserBox;
