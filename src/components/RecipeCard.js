import React, { Component } from 'react';
import RecipeHeader from './RecipeHeader';
import CardBody from './CardBody';
import AddIngredientInput from './AddIngredientInput';

//this.props.num is the card number

class RecipeCard extends Component {
  render(){
    console.log('this.props.num', this.props.num);
    return (
      <div className="max-width">
        <div className="recipe-card">
          {this.props.children}
          <RecipeHeader title={this.props.title}/>
          <CardBody />
          <AddIngredientInput />
        </div>
      </div>
    );
  }
}

export default RecipeCard;
