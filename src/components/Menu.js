import React,{Component} from 'react';
import LinkMenu from './LinkMenu';

class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
      linksState:[]
    }
  }
  setActive = (i)=>{
    let linksState = [];
    linksState[i] = 'active';
    this.setState({
      linksState: linksState
    });
  }
  render(){
    return(
      <ul className="menu">
        {this.props.items.map((v,i)=>
          <li>
            <LinkMenu key={i} linkNumber={i} status={this.state.linksState}
            setActive={this.setActive}
            href={`/${v.toLowerCase().replace(' ','-')}`} >{v}</LinkMenu>
          </li>)}
      </ul>
    )
  }
}

Menu.defaultProps = {
  id: 'menu',
  className: 'menu',
  menus: ['']
}

export default Menu;
