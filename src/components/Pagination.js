import React,{Component} from 'react';

class Pagination extends Component{
  previousPage = ()=>{
    if(this.props.currentPage > 0){
      let currentPage = this.props.currentPage - 1;
      this.props.changePage(currentPage);
    }
  }
  nextPage = ()=>{
    if(this.props.currentPage < this.props.pages - 1 ){
      let currentPage = this.props.currentPage + 1;
      this.props.changePage(currentPage);
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
