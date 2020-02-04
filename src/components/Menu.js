import React,{Component} from 'react';
import LinkMenu from './LinkMenu';

class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
      linksState: this.props.default
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
        {this.props.items.map((category,i)=>
          <li>
            <LinkMenu key={i} href={`/${category.toLowerCase().replace(' ','-')}`}
              linkNumber={i} status={this.state.linksState} setActive={this.setActive}>
                {category}
            </LinkMenu>
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
