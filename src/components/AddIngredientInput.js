import React, { Component } from 'react';

class AddIngredientInput extends Component {
  handleSubmit(e){
    let ingredient = this.refs.newIngredient.value;
    e.preventDefault();
    console.log('form was subbied');
  }

  render() {
    return (
      <div style={{position: 'relative', height: '75px'}}>
        <form className="add-ingredient-form" onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="add-ingredient-input"
            placeholder="click to add ingredient"
            ref="newIngredient"
          />
        </form>
      </div>
    );
  }
}

export default AddIngredientInput;
