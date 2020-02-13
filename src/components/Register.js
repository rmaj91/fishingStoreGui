import React,{Component} from 'react';

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      userCreated: false
    }
  }

  onChangeEmail = (e)=> this.setState({email: e.target.value});
  onChangePassword = (e)=> this.setState({password: e.target.value});
  onChangeFirstName = (e)=> this.setState({firstName: e.target.value});
  onChangeLastName = (e)=> this.setState({lastName: e.target.value});

  onSubmit = (e)=>{
    fetch('http://localhost:8080/v1/api/auth/register',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email:this.state.email,
        password:this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
    })
    .then((response)=> response.json())
    .then((user)=>console.log('password hash: ' + user.password))
    .then(()=> this.setState({userCreated: true}))
    .catch((error)=> console.log('register error'))

    e.preventDefault();
  }

  render(){
    if(this.state.userCreated) {
      return(
        <div style={{marginRight:'40%',marginTop:'20px', fontSize:'32px'}}>
          User created!
        </div>
      )
    }
    return(
      <div style={{marginRight:'40%',marginTop:'20px'}}>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="email">Email:</label><br/>
          <input onChange={this.onChangeEmail} value={this.state.email} name="email" type="text"></input><br/>

          <label htmlFor="password">Password:</label><br/>
          <input onChange={this.onChangePassword} value={this.state.password} name="password" type="password"></input><br/>

          <label htmlFor="firstName">First Name:</label><br/>
          <input onChange={this.onChangeFirstName} value={this.state.firstName} name="firstName" type="text"></input><br/>

          <label htmlFor="lastName">Last Name:</label><br/>
          <input onChange={this.onChangeLastName} value={this.state.lastName} name="lastName" type="text"></input><br/>

          <input type="submit" value="Register"/>
        </form>
      </div>
    )
  }
}

export default Register;
