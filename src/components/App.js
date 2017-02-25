import React, { Component } from 'react';
import '../../public/App.css';
import Modal from './Modal';
import NewRecipe from './NewRecipe';

//TODO: add recipe button its own component
//TODO: render out the cards in this.state.recipeCards

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
    let button = this.state.modalMode ? null :
      <NewRecipe enterModalMode={this.enterModalMode}/>

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
