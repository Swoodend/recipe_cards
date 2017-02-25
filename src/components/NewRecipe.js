import React, { Component } from 'react';

class NewRecipe extends Component {
  render(){
    return (
      <div
        onClick={this.props.enterModalMode}
        className="recipe-button">
        Add a Recipe
      </div>
    );
  }
}

export default NewRecipe;
