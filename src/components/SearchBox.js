import React,{Component} from 'react';

class SearchBox extends Component{
  constructor(props){
    super(props)
    this.state={
      category:'all-categories',
      name:''
    }
  }
  onSubmit = (e)=>{
    if(this.state.name === ''){
      e.preventDefault()
      return;
    } else {
      this.props.changeSearchState(this.state.name, this.state.category)
      e.preventDefault()
    }
  }
  onChangeName = (e)=>{this.setState({name: e.target.value})}

  onChangeCategory = (e)=>{
    let category = e.target.value.toLowerCase().trim().replace(' ','-')
    this.setState({category: category})
  }

  render(){
    const style={
      display:'flex',
      justifyContent:'center'
    }
    return(
      <div id="searchbox" style={style}>
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onChangeName} type="text" className="form-control mr-sm-2" placeholder="Search..."/>
        <select onChange={this.onChangeCategory} className="form-control">
          <option>All Categories</option>
          <option>Rods</option>
          <option>Reels</option>
          <option>Lures</option>
          <option disabled="disabled">─────────────</option>
          <option>News</option>
          <option>Discount</option>
        </select>
        <input type="submit" value="Search"></input>
        </form>
      </div>
    )
  }
}

export default SearchBox;
