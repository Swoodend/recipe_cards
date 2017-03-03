import React, { Component } from 'react';
import '../../public/App.css';
import Modal from './Modal';
import NewRecipe from './NewRecipe';
import RecipeCard from './RecipeCard';
import Nav from './Nav';
import getKey from '../helpers/keys';

class App extends Component {
  constructor(props){
    super(props);
    this.enterModalMode = this.enterModalMode.bind(this);
    this.exitModalMode = this.exitModalMode.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.addNewIngredient = this.addNewIngredient.bind(this);
    this.state = {
      recipeCards: [],
      modalMode: false
    }
  }

  componentWillMount(){
    let recipes = [
      {
        title: 'Spaghetti',
        key: getKey(50),
        ingredients: ['noodles', 'sauce', 'pasta']
      },

      {
        title: 'Ham Sandwich',
        key: getKey(50),
        ingredients: ['bread', 'lettuce', 'mustard', 'cheese']
      }
    ];

    localStorage.setItem('recipes',JSON.stringify(recipes));
    this.setState({
      recipeCards: JSON.parse(localStorage.getItem('recipes'))
    });
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
    let newRecipes = this.state.recipeCards;
    newRecipes.push(recipe);
    this.setState({
      recipeCards: newRecipes
    });
  }

  deleteCard(i){
    let removedCard = this.state.recipeCards;
    removedCard.splice(i, 1);
    this.setState({
      recipeCards: removedCard
    });
  }

  addNewIngredient(recipeNum, ingredient){
    let newState = this.state.recipeCards;
    newState[recipeNum].ingredients.push(ingredient);
    this.setState({
      recipeCards: newState
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
          num={i}
          addNewIngredient={this.addNewIngredient}
          delCard={this.deleteCard}
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
