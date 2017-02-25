import React, { Component } from 'react';

class Modal extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    let recipeTitle = this.refs.newRecipe.value;
    e.preventDefault();
    this.props.exitModalMode();
    this.props.addNewRecipe(recipeTitle);
  }
  render(){
    return (
      <div className="modal">
        <h3>Create a new recipe</h3>
        <form onSubmit={this.handleSubmit}>
          <input ref="newRecipe" className="new-recipe-input" type="text"/>
          <button className="save" type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default Modal;
