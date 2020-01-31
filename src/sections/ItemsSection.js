import React,{Component} from 'react';
import ShopItem from './../components/ShopItem'

class ItemsSection extends Component {
render(){
    return(
      <div style={{backgroundColor:'gray',width:"100%",border:'1px solid black',display:'flex',flexWrap:'wrap'}}>
        {this.props.items.map((v,i)=><ShopItem key={i} item={v}/>)}
      </div>
    )
  }
}

ItemsSection.defaultProps = {
  category:'all-categories'
}


export default ItemsSection;
