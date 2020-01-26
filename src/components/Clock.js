import React, {Component} from 'react';

let DigitalDisplay = (props)=>{
  return <div style={{position:'fixed',left:0,fontSize:'24px'}}>{props.time}</div>
}

class Clock extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentTime: new Date().toLocaleString()
    }
    this.LaunchClock();
  }
  LaunchClock(){
    setInterval(()=>{
      this.setState({
        currentTime: new Date().toLocaleString()
      })
    },1000)
  }
  // state ={
  //   currentTime: new Date().toLocaleString()
  // }
  render(){
    return(
      <div id="clock">
        <DigitalDisplay time={this.state.currentTime}/>
        <p style={{position:'fixed',left:0,top:15}}>Brania dobre!</p>
      </div>
    )
  }
}

export default Clock;
