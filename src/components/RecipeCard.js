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
    this.updateIngredient = this.updateIngredient.bind(this);
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

  updateIngredient(cardNum, itemNum, newIngredient){
    this.props.reportEditedIngredient(cardNum, itemNum, newIngredient);
  }

  render(){
    if (!this.state.hidden){
      return (
        <div className="max-width">
          <div className="recipe-card">
            <DeleteButton click={this.deleteCard}/>
            <RecipeHeader reportClick={this.listenForHeaderClick} title={this.props.title}/>
            <CardBody cardNum={this.props.cardNum} ingredientWasEdited={this.ingredientWasEdited} ingredients={this.props.ingredients} updateEditedIngredient={this.updateIngredient}/>
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
