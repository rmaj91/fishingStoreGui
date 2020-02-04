import React,{Component} from 'react';
import Menu from './../components/Menu';
import SearchBox from './../components/SearchBox';
import ItemsSection from './ItemsSection';
import Pagination from './../components/Pagination';

class MainContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      items:[],
      MenuItems: ['News','Discount','All Categories','Rods','Reels','Lures']
    }
  }
  changeCategory = (newCategory)=>{
    let category = newCategory.toLowerCase().replace(' ','-')
    let url = `http://localhost:8080/v1/api/items/category/${category}`
    fetch(url)
    .then(resp => resp.json())
    .then(items=> this.setState({items:items}))
    .catch(error => console.error(error));
  }
  componentDidMount(){
    let url = 'http://localhost:8080/v1/api/items/category/all-categories?page=1'
    fetch(url)
    .then(resp => resp.json())
    .then(items=> this.setState({items:items}))
    .catch(error => console.error(error));
  }

  render(){
    return(
      <div id="mainContainer">
        <SearchBox/>
        <div id="flexContainer">
          <Menu default={['','','active','','','']} items={this.state.MenuItems}
            changeCategory={this.changeCategory}/>
          <ItemsSection items={this.state.items}/>
        </div>
        <Pagination/>
      </div>
    )
  }
}

export default MainContainer;
