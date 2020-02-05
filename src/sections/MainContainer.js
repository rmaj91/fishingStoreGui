import React,{Component} from 'react';
import Menu from './../components/Menu';
import SearchBox from './../components/SearchBox';
import ItemsSection from './ItemsSection';
import Register from './../components/Register';
import {
  Switch,
  Route,
} from "react-router-dom";

class MainContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      items:[],
      MenuItems: ['News','Discount','All Categories','Rods','Reels','Lures'],
      pages: 1,
      currentPage: 0,
      sizeOfPage: 3
    }
  }
  changeCategory = (newCategory)=>{
    let category = newCategory.toLowerCase().replace(' ','-')
    let url = `http://localhost:8080/v1/api/items/category/${category}?page=${this.state.currentPage}&size=${this.state.sizeOfPage}`
    fetch(url)
    .then(resp => resp.json())
    .then(items=> this.setState({items:items}))
    .catch(error => {
      this.setState({items:[]});
      console.error(error);
    })

    fetch(`http://localhost:8080/v1/api/items/category/${category}/pages/${this.state.sizeOfPage}`)
    .then(resp => resp.json())
    .then(pages=> {
      console.log(pages+' pages');
      this.setState({pages:pages})
    })
    .catch(error => console.error(error));
  }

  componentDidMount(){
    let url = `http://localhost:8080/v1/api/items/category/all-categories?page=1&size=${this.state.sizeOfPage}`
    fetch(url)
    .then(resp => resp.json())
    .then(items=> this.setState({items:items}))
    .catch(error => console.error(error));

    fetch(`http://localhost:8080/v1/api/items/category/all-categories/pages/${this.state.sizeOfPage}`)
    .then(resp => resp.json())
    .then(pages=> this.setState({pages:pages}))
    .catch(error => console.error(error));
  }

  render(){
    return(
      <div id="mainContainer">
        <SearchBox/>
        <div>
          <Menu default={['','','active','','','']} items={this.state.MenuItems}
            changeCategory={this.changeCategory}/>
            <Switch>
              <Route path="/register">
                <Register/>
              </Route>
              <Route path="/*">
                <ItemsSection items={this.state.items} pages={this.state.pages}
                  currentPage={this.state.currentPage} />
              </Route>
            </Switch>
        </div>
      </div>
    )
  }
}

export default MainContainer;
