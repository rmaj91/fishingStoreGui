import React,{Component} from 'react';

class Register extends Component{
  render(){
    return(
      <div style={{marginRight:'40%',marginTop:'20px'}} method="post">
        <form>
          <label htmlFor="email">Email:</label><br/>
          <input name="email" type="text"></input><br/>

          <label htmlFor="password">Password:</label><br/>
          <input name="password" type="password"></input><br/>

          <label htmlFor="firstName">First Name:</label><br/>
          <input name="firstName" type="text"></input><br/>

          <label htmlFor="lastName">Last Name:</label><br/>
          <input name="lastName" type="text"></input><br/>

          <input type="submit" value="Register" />
        </form>
      </div>
    )
  }
}

export default Register;
