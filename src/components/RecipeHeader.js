import React, { Component } from 'react';

class RecipeHeader extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.reportClick();
  }

  render(){
    let style = {borderBottom: '2px solid red'};
    return (
      <h1 onClick={this.handleClick} style={style}>{this.props.title}</h1>
    );
  }
}

export default RecipeHeader;
