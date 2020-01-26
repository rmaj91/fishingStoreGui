import React,{Component} from 'react'
import Category from './../components/Category'

class NavSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: "text"
    };
  }
  render(){
    return(
      <nav id="navsection">
        <Category category="Rods"/>
        <Category category="Reels"/>
        <Category category="Baits"/>
      </nav>
    )
  }
}



export default NavSection;
