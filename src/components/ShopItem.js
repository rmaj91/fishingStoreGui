import React,{Component} from 'react';

class ShopItem extends Component {
  render(){
    return(
      <div className="card text-white bg-info mb-3" style={{width:'200px'}}>
      <div className="card-header">{this.props.item.name}</div>
      <div class="card-body">
      <h5>Image</h5>
        <p className="card-text"><span> price: </span>{this.props.item.price}</p>
        <button className="btn btn-secondary my-2 my-sm-0">Add to cart</button>
        </div>
      </div>

      // <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
      //   <div class="card-header">Header</div>
      //   <div class="card-body">
      //     <h4 class="card-title">Info card title</h4>
      //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      //   </div>
      // </div>

    )
  }
}


export default ShopItem;
