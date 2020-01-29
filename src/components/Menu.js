import React,{Component} from 'react'
import Link from './Link.js'

class Menu extends Component{
  render(){
    return(
      <div id={this.props.id} className={this.props.className} >
        {this.props.menus.map((v,i)=>{
          return <div key={i}><Link label={v}/></div>
        })}
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
