import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
      <div style={{backgroundColor: 'gray',textAlign:'center',height:'25px',
      position:'fixed', bottom:'0',left:'0',width:'100%',
    marginTop:10}}>
        Footer
      </div>
    )
  }
}

export default Footer;
