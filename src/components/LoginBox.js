import React,{Component} from 'react';

class Loginbox extends Component{
  render(){
    return(
      <div id="loginBox">
        <input placeholder="Login..."/><br/>
        <input type="password" placeholder="Password..."/><br/>
        <button>Login</button>
      </div>
    )
  }
}

export default Loginbox;
