import React,{Component} from 'react'

class Menu extends Component{
  render(){
    return(
      <ul className={this.props.menuType}>
        {this.props.items.map((v,i)=><li onClick={()=>this.props.changeCategory(v)}id="horizontalMenuItems" key={i}>{v}</li>)}
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
