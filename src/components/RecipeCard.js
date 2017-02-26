import React, { Component } from 'react';
import RecipeHeader from './RecipeHeader';
import CardBody from './CardBody';
import AddIngredientInput from './AddIngredientInput';

//this.props.num is the card number

class RecipeCard extends Component {
  constructor(props){
    super(props);
    this.watchNewIngredients = this.watchNewIngredients.bind(this);
    this.listenForHeaderClick = this.listenForHeaderClick.bind(this);
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
    console.log('heard in recipeCard');
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render(){
    if (!this.state.hidden){
      return (
        <div className="max-width">
          <div className="recipe-card">
            {this.props.children}
            <RecipeHeader reportClick={this.listenForHeaderClick} title={this.props.title}/>
            <CardBody ingredients={this.state.ingredients}/>
            <AddIngredientInput addIngredient={this.watchNewIngredients}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="max-width">
          <RecipeHeader reportClick={this.listenForHeaderClick} title={this.props.title}/>
        </div>
      )
    }

  }
}

export default RecipeCard;
