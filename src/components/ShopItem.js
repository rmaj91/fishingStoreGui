import React,{Component} from 'react';

class ShopItem extends Component {
  constructor(props){
    super(props);
    this.state={
      rods:[]
    };
  }

  componentDidMount(){
    fetch('http://localhost:8080/api/rods')
      .then(response => response.json())    // one extra step
      .then(data => {
        this.setState({
          rods:data
        })
      })
      .catch(error => console.error(error));

  }
  render(){
    return(
      <div id="items">
        <ul>
          {this.state.rods.map((rod)=>
            <li key={rod.id}>{rod.brand} {rod.model} {rod.size}</li>
          )}
        </ul>
      </div>
    )
  }
}


export default ShopItem;
