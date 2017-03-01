import React, { Component } from 'react';
import getKey from '../helpers/keys';

class Modal extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    let recipeTitle = this.refs.newRecipe.value;
    let randKey = getKey(50);
    e.preventDefault();
    this.props.exitModalMode();
    this.props.addNewRecipe(
      {
        title: recipeTitle,
        key: randKey,
        ingredients: []
      }
    );
  }
  render(){
    return (
      <div className="modal">
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <input ref="newRecipe" className="new-recipe-input" type="text"/>
          <div className="text-container">
            <p className="sub-modal-text">New Recipe</p>
          </div>
          <button className="save" type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default Modal;
