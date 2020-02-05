import React,{Component} from 'react';
import ShopItem from './../components/ShopItem';
import Pagination from './../components/Pagination';

class ItemsSection extends Component {
render(){
  if(this.props.items.length === 0){
    return (
      <div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <h2 style={{marginTop:'50px'}}>No items found.</h2>
        </div>
      </div>
    )
  }else{
    return(
      <div>
        <div style={{width:"auto",display:'flex',flexWrap:'wrap', marginLeft:'10px',marginBottom:'30px'}}>
          {this.props.items.map((v,i)=><ShopItem key={i} item={v}/>)}
        </div>
        <Pagination {...this.props}/>
      </div>
    )
  }
  }
}

ItemsSection.defaultProps = {
  category:'all-categories'
}


export default ItemsSection;
