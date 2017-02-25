import React, { Component } from 'react';

class RecipeHeader extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      clicked: false
    }
  }

  onClick(){
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render(){
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

export default RecipeHeader;
