import React,{Component} from 'react';
import Menu from './../components/Menu';
import SearchBox from './../components/SearchBox';
import ItemsSection from './ItemsSection';
import Register from './../components/Register';
import {Switch,  Route,} from "react-router-dom";

class MainContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      items:[],
      MenuItems: ['News','Discount','All Categories','Rods','Reels','Lures'],
      pages: 1,
      currentPage: 0,
      sizeOfPage: 9,
      category: 'all-categories'
    }
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.category !== this.state.category || prevState.currentPage !== this.state.currentPage || prevState.sizeOfPage !== this.state.sizeOfPage){
      let url = `http://localhost:8080/v1/api/items/category/${this.state.category}?page=${this.state.currentPage}&size=${this.state.sizeOfPage}`
      fetch(url)
      .then(resp => resp.json())
      .then(items=> this.setState({items:items}))
      .catch(error => console.error(error));
    }
    if(prevState.category !== this.state.category || prevState.sizeOfPage !== this.state.sizeOfPage){
      fetch(`http://localhost:8080/v1/api/items/category/${this.state.category}/pages/${this.state.sizeOfPage}`)
      .then(resp => resp.json())
      .then(pages=> this.setState({pages:pages}))
      .catch(error => console.error(error));
    }
  }

  changeItemsOnPage = (event)=>{
    let itemsPerPage = event.target.value
    this.setState({
      sizeOfPage: itemsPerPage
    })
  }

  changeCategory = (newCategory)=>{
    newCategory = newCategory.toLowerCase().replace(' ','-')
    this.setState({
      category:newCategory,
      currentPage:0
    })
  }

  changePage = (page)=>{
    this.setState({currentPage: page})
  }

  componentDidMount(){
    // fetch items
    let url = `http://localhost:8080/v1/api/items/category/${this.state.category}?page=${this.state.currentPage}&size=${this.state.sizeOfPage}`
    fetch(url)
    .then(resp => resp.json())
    .then(items=> this.setState({items:items}))
    .catch(error => console.error(error));

    // fetch quantity of pages
    fetch(`http://localhost:8080/v1/api/items/category/${this.state.category}/pages/${this.state.sizeOfPage}`)
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
                  currentPage={this.state.currentPage} changePage={this.changePage}
                  changeItemsOnPage={this.changeItemsOnPage}/>
              </Route>
            </Switch>
        </div>
      </div>
    )
  }
}

export default MainContainer;
