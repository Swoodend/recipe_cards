import React, { Component } from 'react';
import '../../public/App.css';
import Modal from './Modal';

class App extends Component {
  constructor(props){
    super(props);
    this.enterModalMode = this.enterModalMode.bind(this);
    this.exitModalMode = this.exitModalMode.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.state = {
      recipeCards: [],
      modalMode: false
    }
  }

  componentDidMount(){
    document.addEventListener('click', this.handleClick, false);
  }

  handleClick(e){
    if (e.target === this.refs.outsideOfModal){
      this.exitModalMode();
    }
  }

  enterModalMode(){
    this.setState({
      modalMode: true
    });
  }

  exitModalMode(){
    console.log('emm called');
    this.setState({
      modalMode: false
    });
  }

  addNewRecipe(recipe){
    console.log('anr called');
    let newRecipes = this.state.recipeCards;
    newRecipes.push(recipe);
    this.setState({
      recipeCards: newRecipes
    });
  }

  render() {
    let modal = this.state.modalMode ?
      <Modal addNewRecipe={this.addNewRecipe} exitModalMode={this.exitModalMode}/> :
       null;
    let button;

    if (this.state.modalMode){
      button = null;
    } else {
      button =
        <div
          onClick={this.enterModalMode}
          className="recipe-button">
          Add a Recipe
        </div>;
    }

    return (
      <div ref="outsideOfModal" className="recipe-cards">
        {modal}
        <div className="card-container">
          <h1>Recipe Cards</h1>
        </div>
        {button}
      </div>
    );
  }
}

export default App;
