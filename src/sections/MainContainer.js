import React,{Component} from 'react';
import Menu from './../components/Menu';
import SearchBox from './../components/SearchBox';
import ItemsSection from './ItemsSection';
import Register from './../components/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    .catch(error => {
      this.setState({items:[]});
      console.error(error);
    })
  }
  componentDidMount(){
    let url = 'http://localhost:8080/v1/api/items/category/all-categories?page=1'
    fetch(url)
    .then(resp => resp.json())
    .then(items=> this.setState({items:items}))
    .catch(error => console.error(error));
  }

  render(){
    console.log(this.props.location)
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
                <ItemsSection items={this.state.items}/>
              </Route>
            </Switch>
        </div>
      </div>
    )
  }
}

export default MainContainer;
