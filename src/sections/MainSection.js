import React,{Component} from 'react';
import ShopItem from './../components/ShopItem';
import FilterSection from './FilterSection.js';
import Menu from './../components/Menu'

class MainSection extends Component {
  render(){
    return(
      <div id="mainSection">
        <Menu id="horizontalMenu"/>
        <FilterSection/>
        <h2>Items:</h2>
        <ShopItem/>
      </div>
    )
  }
}


export default MainSection;
