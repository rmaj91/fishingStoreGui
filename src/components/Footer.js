import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
      <div style={{backgroundColor: 'gray',textAlign:'center',height:'25px',
      position:'fixed', bottom:'0',left:'0',width:'100%',
    marginTop:10}}>
        What a cool Footer! &copy; When u copy it, angy boar gonna find you! And eats your guts!
      </div>
    )
  }
}

export default Footer;
