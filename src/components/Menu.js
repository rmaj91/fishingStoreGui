import React,{Component} from 'react';
import {Link} from "react-router-dom";

class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
      linksState: this.props.default
    }
  }
  setActive = (category,i)=>{
    let linksState = [];
    linksState[i] = 'active';
    this.setState({
      linksState: linksState
    });

    this.props.changeCategory(category);
    console.log(category);

  }
  render(){
    return(
      <div style={{float:'left'}}>
      <ul className="menu">
        {this.props.items.map((category,i)=>
          <li>
            <Link key={i} to={`/${category.toLowerCase().replace(' ','-')}`}
              className={this.state.linksState[i]} onClick={()=>this.setActive(category,i)} >
              {category}
            </Link>
          </li>)}
      </ul>
      </div>
    )
  }
}

Menu.defaultProps = {
  id: 'menu',
  className: 'menu',
  menus: ['']
}

export default Menu;
