import React, { Component } from 'react';

class AddIngredientInput extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    console.log('called in ingredients input')
    e.preventDefault();
    let ingredient = this.refs.newIngredient.value;
    this.refs.newIngredient.value = '';
    this.props.addIngredient(ingredient);
  }

  render() {
    return (
      <form className="add-ingredient-form" onSubmit={this.handleSubmit}>
        <input
          className="add-ingredient-input"
          placeholder="New Ingredient"
          ref="newIngredient"
        />
      </form>
    );
  }
}

export default AddIngredientInput;
