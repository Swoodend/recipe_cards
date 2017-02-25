import React, { Component } from 'react';

class RecipeHeader extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    //set the state of cardBody to hidden
  }

  render(){
    let style = {borderBottom: '2px solid red'};
    return (
      <h1 style={style}>{this.props.title}</h1>
    )
  }
}

export default RecipeHeader;
