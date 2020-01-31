import React,{Component} from 'react';

class SearchBox extends Component{
  render(){
    return(
      <div id="searchbox">
        <input placeholder="Search..."/>
        <select>
          <option>All Categories</option>
          <option>Rods</option>
          <option>Reels</option>
          <option>Lures</option>
        </select>
        <button>Search</button>
      </div>
    )
  }
}

export default SearchBox;
