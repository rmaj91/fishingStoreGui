import React,{Component} from 'react';

class SearchBox extends Component{
  render(){
    const style={
      display:'flex',
      justifyContent:'center'
    }

    return(
      <div id="searchbox" style={style}>
        <input type="text" className="form-control mr-sm-2" placeholder="Search..."/>
        <select className="form-control">
          <option>All Categories</option>
          <option>Rods</option>
          <option>Reels</option>
          <option>Lures</option>
          <option disabled="disabled">─────────────</option>
          <option>News</option>
          <option>Discount</option>
        </select>
        <input type="submit" value="Search"></input>
      </div>
    )
  }
}

export default SearchBox;
