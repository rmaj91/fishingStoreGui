import React,{Component} from 'react';
import ShopItem from './../components/ShopItem';
import FilterSection from './FilterSection.js';

class MainSection extends Component {
  render(){
    return(
      <div id="mainSection">
        <FilterSection/>
        <h2>Items:</h2>
        <ShopItem/>
      </div>
    )
  }
}


export default MainSection;
