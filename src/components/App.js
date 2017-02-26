import React, { Component } from 'react';
import '../../public/App.css';
import Modal from './Modal';
import NewRecipe from './NewRecipe';
import RecipeCard from './RecipeCard';
import DeleteButton from './DeleteButton';

class App extends Component {
  constructor(props){
    super(props);
    this.enterModalMode = this.enterModalMode.bind(this);
    this.exitModalMode = this.exitModalMode.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.state = {
      recipeCards: [],
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

  render() {
    let modal = this.state.modalMode ?
      <Modal addNewRecipe={this.addNewRecipe} exitModalMode={this.exitModalMode}
      /> :
       null;
    let button = this.state.modalMode ? null :
      <NewRecipe enterModalMode={this.enterModalMode}/>

    let style = modal ? {filter: "grayscale(100%)"} : null;

    let cards = this.state.recipeCards.map((cardTitle, i) => {
      return (
        <RecipeCard num={i} key={i+1} title={cardTitle}>
          <DeleteButton num={i} deleteCard={this.deleteCard}/>
        </RecipeCard>
      )

    });
    return (
      <div>
        <div style={style} ref="outsideOfModal" className="recipe-cards">
          <div className="card-container">
            <h1 className="main-header">Recipe Cards</h1>
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
