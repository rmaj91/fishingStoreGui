import React,{Component} from 'react'
import Menu from './../components/Menu'
import TopBar from './TopBar'
import ItemsSection from './ItemsSection'

const horizontalMenuItems = ['News','Discount']
const verticalMenuItems = ['All Categories','Rods','Reels','Lures']

class MainContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      category:'rods',
      items:[]
    }
  }

  changeCategory = (newCategory)=>{
    let category = this.state.category.toLowerCase().replace(' ','-')
    console.log(category)
    let url = `http://localhost:8080/v1/api/items/category/${category}`
    fetch(url)
    .then(resp => resp.json())
    .then(items=> this.setState({items:items}))
    .catch(error => console.error(error));

    this.setState({
      category:newCategory
    })
  }
  render(){
    return(
      <div>
        <Menu items={horizontalMenuItems} menuType="horizontalMenu"
          changeCategory={this.changeCategory}/>
        <TopBar/>
        <div id="flexContainer">
          <Menu items={verticalMenuItems} changeCategory={this.changeCategory}/>
          <ItemsSection items={this.state.items}/>
        </div>
      </div>
    )
  }
}

export default MainContainer;
