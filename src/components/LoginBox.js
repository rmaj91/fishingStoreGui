import React,{Component} from 'react';

class Loginbox extends Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  onChangeEmail = (e)=> this.setState({email: e.target.value})
  onChangePassword = (e)=> this.setState({password: e.target.value})

  onSubmit = (e)=>{
    fetch('http://localhost:8080/v1/api/auth/login',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    })
    .then((response) => response.json())
    .then((data)=>{console.log('token: ', data.token)})
    .catch((error)=> console.log('error while logging...'))

    e.preventDefault();
  }

  render(){
    return(
      <div id="loginBox">
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChangeEmail} value={this.state.email} placeholder="Email..." className="form-control"/><br/>
        <input type="password" onChange={this.onChangePassword} value={this.state.password}placeholder="Password..." className="form-control"/><br/>
        <input  type="submit" value="Login"></input>
      </form>
      </div>
    )
  }
}

export default Loginbox;
