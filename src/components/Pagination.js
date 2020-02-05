import React,{Component} from 'react';

class Pagination extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentPage: this.props.currentPage
    }
  }
  previousPage = ()=>{
    if(this.state.currentPage > 0){
      let currentPage = this.state.currentPage - 1;
      this.props.changePage(currentPage);
      this.setState({
        currentPage: currentPage
      })
    }
  }
  nextPage = ()=>{
    if(this.state.currentPage < this.props.pages-1 ){
      let currentPage = this.state.currentPage + 1;
      this.props.changePage(currentPage);
      this.setState({
        currentPage: currentPage
      })
    }
  }
  render(){
    if(this.props.pages === 1){
      return(<div></div>)
    } else{
      return(

        <div className="pagination">
          <ul >
            <li style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px',marginRight:'1px'}}>
              <a onClick={this.previousPage}>&laquo;</a>
              {}
            </li>
            <li className="pagItem">
              <a href="#">1</a>
            </li>
            <li className="pagItem">
              <a href="#">2</a>
            </li>
            <li className="pagItem">
              <a href="#">3</a>
            </li>
            <li onClick={this.nextPage} style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
              <a href="#">&raquo;</a>
            </li>
          </ul>
        </div>
      )
    }
  }
}



export default Pagination;
