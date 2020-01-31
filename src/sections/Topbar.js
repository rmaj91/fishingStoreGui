import React, {Component} from 'react';
import SearchBox from './../components/SearchBox';

class TopBar extends Component{
  render(){
    return(
      <div id="topbar">
        <SearchBox/>
      </div>
    )
  }
}

export default TopBar;
