import React, { Component } from 'react';
import '../../public/App.css';
import Modal from './Modal';
import NewRecipe from './NewRecipe';
import RecipeCard from './RecipeCard';
import Nav from './Nav';
import getLocalStorage from '../helpers/localstorage';

class App extends Component {
  constructor(props){
    super(props);
    this.enterModalMode = this.enterModalMode.bind(this);
    this.exitModalMode = this.exitModalMode.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.addNewIngredient = this.addNewIngredient.bind(this);
    this.updateEditedIngredient = this.updateEditedIngredient.bind(this);
    if (!localStorage.getItem('recipes')){
      localStorage.setItem('recipes', JSON.stringify({
        recipeCards: []
      }));
    }

    this.state = {
      recipeCards: JSON.parse(localStorage.getItem('recipes')).recipeCards,
      modalMode: false
    }
  }


  componentDidMount(){
    this.refs.outsideOfModal.addEventListener('click', this.handleClick, false);
  }


  handleClick(e){
    this.exitModalMode();
  }

  enterModalMode(){
    this.setState({
      modalMode: true
    });
  }

  exitModalMode(){
    this.setState({
      modalMode: false
    });
  }

  addNewRecipe(recipe){
    let recipes = getLocalStorage();
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify({recipeCards : recipes}));
    this.setState({
      recipeCards: JSON.parse(localStorage.getItem('recipes')).recipeCards
    });
  }

  deleteCard(i){
    let recipes = getLocalStorage();
    recipes.splice(i, 1);
    localStorage.setItem('recipes', JSON.stringify({recipeCards : recipes}));
    this.setState({
      recipeCards: JSON.parse(localStorage.getItem('recipes')).recipeCards
    });
  }

  addNewIngredient(recipeNum, ingredient){
    let recipes = getLocalStorage();
    recipes[recipeNum].ingredients.push(ingredient);
    localStorage.setItem('recipes', JSON.stringify({recipeCards: recipes}));
    this.setState({
      recipeCards: JSON.parse(localStorage.getItem('recipes')).recipeCards
    });
  }

  updateEditedIngredient(cardNum, ingredientNum, newIngredient){
    let recipes = getLocalStorage();
    recipes[cardNum].ingredients[ingredientNum] = newIngredient;
    localStorage.setItem('recipes', JSON.stringify({recipeCards: recipes}));
    this.setState({
      recipeCards: JSON.parse(localStorage.getItem('recipes')).recipeCards
    });
  }

  render() {
    let modal = this.state.modalMode ?
      <Modal addNewRecipe={this.addNewRecipe} exitModalMode={this.exitModalMode}
      /> :
       null;
    let button = this.state.modalMode ? null :
      <NewRecipe enterModalMode={this.enterModalMode}/>

    let style = modal ? {filter: "blur(5px) grayscale(100%)"} : null;

    let cards = this.state.recipeCards.map((cardObj, i) => {
      return (
        <RecipeCard
          ingredients={cardObj.ingredients}
          key={cardObj.key}
          title={cardObj.title}
          cardNum={i}
          addNewIngredient={this.addNewIngredient}
          delCard={this.deleteCard}
          reportEditedIngredient={this.updateEditedIngredient}
        ></RecipeCard>
      )
    });

    return (
      <div>
        <Nav />
        <div style={style} ref="outsideOfModal" className="recipe-cards">
          <div className="card-container">
            {cards}
          </div>
          {button}
        </div>
        {modal}
      </div>

    );
  }
}

export default App;
