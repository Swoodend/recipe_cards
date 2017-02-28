import React, { Component } from 'react';
import RecipeHeader from './RecipeHeader';
import CardBody from './CardBody';
import AddIngredientInput from './AddIngredientInput';
import DeleteButton from './DeleteButton';

//this.props.num is the card number

class RecipeCard extends Component {
  constructor(props){
    super(props);
    this.watchNewIngredients = this.watchNewIngredients.bind(this);
    this.listenForHeaderClick = this.listenForHeaderClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.ingredientWasEdited= this.ingredientWasEdited.bind(this);
    this.state = {
      ingredients: [],
      hidden: false
    };
  }

  watchNewIngredients(ingredient){
    let newIngredient = this.state.ingredients;
    newIngredient.push(ingredient);
    this.setState({
      ingredients: newIngredient
    });
  }

  listenForHeaderClick(){
    this.setState({
      hidden: !this.state.hidden
    });
  }

  deleteCard(){
    let ingredients = this.state.ingredients;
    this.props.delCard(this.props.num);
    this.setState({
      ingredients
    });
  }

  ingredientWasEdited(i, value){
    let currentIngredients = this.state.ingredients
    currentIngredients[i] = value;
    this.setState({
      ingredients: currentIngredients
    });
  }

  render(){
    if (!this.state.hidden){
      return (
        <div className="max-width">
          <div className="recipe-card">
            <DeleteButton click={this.deleteCard}/>
            <RecipeHeader reportClick={this.listenForHeaderClick} title={this.props.title}/>
            <CardBody ingredientWasEdited={this.ingredientWasEdited} ingredients={this.state.ingredients}/>
            <AddIngredientInput addIngredient={this.watchNewIngredients}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="max-width">
          <RecipeHeader reportClick={this.listenForHeaderClick} title={this.props.title}/>
        </div>
      );
    }

  }
}

export default RecipeCard;
