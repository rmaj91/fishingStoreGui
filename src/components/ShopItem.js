import React,{Component} from 'react';

class ShopItem extends Component {
  render(){
    return(
      <div className="shopItem">
      <div className="itemNameDiv">
        <h3>{this.props.item.name}</h3>
      </div>
      <img alt="item image"/>
        <p className="card-text"><span> price: </span>{this.props.item.price}</p>
        <button className="btn btn-secondary my-2 my-sm-0">Add to cart</button>
      </div>
    )
  }
}


export default ShopItem;
