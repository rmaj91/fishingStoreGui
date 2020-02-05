import React,{Component} from 'react';
import ShopItem from './../components/ShopItem';
import Pagination from './../components/Pagination';

class ItemsSection extends Component {
render(){
  if(this.props.items.length == 0){
    return (
      <div style={{width:"100%",display:'flex',flexWrap:'wrap', marginLeft:'10px'}}>
        <h3>No items found.</h3>
      </div>
    )
  }else{
    return(
      <div>
        <div style={{width:"100%",display:'flex',flexWrap:'wrap', marginLeft:'10px'}}>
          {this.props.items.map((v,i)=><ShopItem key={i} item={v}/>)}
        </div>
        <Pagination/>
      </div>
    )
  }
  }
}

ItemsSection.defaultProps = {
  category:'all-categories'
}


export default ItemsSection;
