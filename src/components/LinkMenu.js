import React,{Component} from 'react';

class LinkMenu extends Component{
  constructor(props){
    super(props);
    this.state = {
      className: this.props.className
    }
  }
  handleOnClick = ()=>{
    this.props.setActive(this.props.linkNumber);
  }
  render(){
    let className = this.props.status[this.props.linkNumber];
    return(
      <a href={this.props.href} className={className} onClick={this.handleOnClick}>
        {this.props.children}
      </a>
    )
  }
}

export default LinkMenu;
