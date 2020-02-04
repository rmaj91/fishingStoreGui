import React,{Component} from 'react';

class Pagination extends Component{
  render(){
    return(
      <div className="pagination">
        <ul >
          <li style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px',marginRight:'1px'}}>
            <a >&laquo;</a>
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
          <li style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
            <a class="page-link" href="#">&raquo;</a>
          </li>
        </ul>
      </div>
    )
  }
}



export default Pagination;
