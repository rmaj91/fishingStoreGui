import React,{Component} from 'react';

class ShopItem extends Component {
  render(){
    return(
      <div className="shopItem">
      <div className="itemNameDiv">
        <h3>{this.props.item.name}</h3>
      </div>
      <img alt={this.props.item.name+' image'}/>
        <p>price: {this.props.item.price} $</p>
        <p>quantity: {this.props.item.quantity}</p>
        <button>Add to cart</button>
      </div>
    )
  }
}


export default ShopItem;
