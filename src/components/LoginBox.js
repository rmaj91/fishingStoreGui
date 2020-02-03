import React,{Component} from 'react';

class Loginbox extends Component{
  render(){
    return(
      <div id="loginBox">
      <form>
        <input type="text" placeholder="Login..." className="form-control"/><br/>
        <input type="password" placeholder="Password..." className="form-control"/><br/>
        <input type="submit" value="Login"></input>
      </form>
      </div>
    )
  }
}

export default Loginbox;
