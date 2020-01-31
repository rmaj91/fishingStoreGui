import React,{Component} from 'react';

class ShopItem extends Component {
  render(){
    return(
      <div className="shopItem">
        {this.props.item.name}<span> price: </span>{this.props.item.price}<p>{this.props.item.description}</p>
      </div>
    )
  }
}


export default ShopItem;
