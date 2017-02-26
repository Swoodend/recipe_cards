import React, { Component } from 'react';
import RecipeHeader from './RecipeHeader';
import CardBody from './CardBody';
import AddIngredientInput from './AddIngredientInput';

//this.props.num is the card number

class RecipeCard extends Component {
  constructor(props){
    super(props);
    this.watchNewIngredients = this.watchNewIngredients.bind(this);
    this.state = {
      ingredients: []
    };
  }

  watchNewIngredients(ingredient){
    let newIngredient = this.state.ingredients;
    newIngredient.push(ingredient);
    this.setState({
      ingredients: newIngredient
    });
  }


  render(){
    return (
      <div className="max-width">
        <div className="recipe-card">
          {this.props.children}
          <RecipeHeader title={this.props.title}/>
          <CardBody ingredients={this.state.ingredients}/>
          <AddIngredientInput addIngredient={this.watchNewIngredients}/>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
