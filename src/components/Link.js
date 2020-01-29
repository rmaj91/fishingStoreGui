import React,{Component} from 'react'

class Link extends Component{
  render(){
    const url = '/' +
    this.props.label.trim()
    .toLowerCase()
    .replace(' ','-')
    return(
      <a className={this.props.id} href={url}>{this.props.label}</a>
    )
  }
}

Link.defaultProps = {
  className:'categoryLink'
}

export default Link;
