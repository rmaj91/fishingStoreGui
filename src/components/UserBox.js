import React,{Component} from 'react'
import Loginbox from './../components/LoginBox'
import shoppingCart from './../images/shoppingCart.png'

class UserBox extends Component{
  render(){
    return(
      <div id="userBox">
        <img src={shoppingCart} alt="shopping cart"/>
        <Loginbox/>
        <a href="http://localhost:3000/register">Join us!</a>
      </div>
    )
  }

}


export default  UserBox;
