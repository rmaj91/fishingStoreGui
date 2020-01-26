import React,{Component} from 'react';

class Category extends Component{
  render(){
    return(
      <p id="category"> {this.props.category}</p>
    )
  }
}

export default Category;
