import React,{Component} from 'react';

class Pagination extends Component{
  render(){
    return(
      <div className="pagination">
        <ul >
          <li >
            <a >&laquo;</a>
          </li>
          <li >
            <a href="#">1</a>
          </li>
          <li >
            <a href="#">1</a>
          </li>
          <li >
            <a href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">&raquo;</a>
          </li>
        </ul>
      </div>
    )
  }
}



export default Pagination;
