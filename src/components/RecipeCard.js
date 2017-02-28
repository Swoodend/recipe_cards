import React, { Component } from 'react';
import RecipeHeader from './RecipeHeader';
import CardBody from './CardBody';
import AddIngredientInput from './AddIngredientInput';
import DeleteButton from './DeleteButton';

class RecipeCard extends Component {
  constructor(props){
    super(props);
    this.watchNewIngredients = this.watchNewIngredients.bind(this);
    this.listenForHeaderClick = this.listenForHeaderClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.state = {
      hidden: false
    };
  }

  watchNewIngredients(ingredient){
    this.props.addNewIngredient(this.props.num, ingredient);
  }

  listenForHeaderClick(){
    this.setState({
      hidden: !this.state.hidden
    });
  }
  deleteCard(){
    this.props.delCard(this.props.num);
  }

  render(){
    if (!this.state.hidden){
      return (
        <div className="max-width">
          <div className="recipe-card">
            <DeleteButton click={this.deleteCard}/>
            <RecipeHeader reportClick={this.listenForHeaderClick} title={this.props.title}/>
            <CardBody ingredientWasEdited={this.ingredientWasEdited} ingredients={this.props.ingredients}/>
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
