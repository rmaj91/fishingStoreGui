import React,{Component} from 'react';
import ShopItem from './../components/ShopItem'

class ItemsSection extends Component {
render(){
    return(
      <div style={{width:"100%",display:'flex',flexWrap:'wrap'}}>
        {this.props.items.map((v,i)=><ShopItem key={i} item={v}/>)}
      </div>
    )
  }
}

ItemsSection.defaultProps = {
  category:'all-categories'
}


export default ItemsSection;
