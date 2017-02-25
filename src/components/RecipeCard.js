import React, { Component } from 'react';
import RecipeHeader from './RecipeHeader';

class RecipeCard extends Component {
  render(){
    return (
      <div className="max-width">
        <div className="recipe-card">
          {this.props.children}
          <RecipeHeader title={this.props.title}/>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
