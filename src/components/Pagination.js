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
      return(

        <div className="pagination">
          <ul>
            <li onClick={this.previousPage}
              style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px',marginRight:'1px'}}>
              &laquo;
            </li>
              {this.props.currentPage+1}
            <li onClick={this.nextPage} style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
              &raquo;
            </li>
          </ul>
        </div>
      )
    }

}



export default Pagination;
