import React,{Component} from 'react';

class FilterSection extends Component {
  render(){
    return(
      <div id="filterSection">
        <select>
          <option>A-Z</option>
          <option>Z-A</option>
          <option>from cheapest</option>
          <option>from most expensive</option>
        </select>
      </div>
    )
  }
}

export default FilterSection
