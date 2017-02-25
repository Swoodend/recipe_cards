import React, { Component } from 'react';

class RecipeCard extends Component {
  render(){
    return (
      <div className="max-width">
        <div className="recipe-card">
          {this.props.children}
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
