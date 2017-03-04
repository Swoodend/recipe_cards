import React, { Component } from 'react';
import EditableItem from './EditableItem';

class CardBody extends Component {
  constructor(props){
    super(props);
    this.watchForEdits = this.watchForEdits.bind(this);
    this.state = {
      hidden: false
    };
  }

  watchForEdits(cardNum, itemNum, newIngredient) {
    this.props.updateEditedIngredient(cardNum, itemNum, newIngredient);
  }

  render(){
    let ingredients = this.props.ingredients.map((ingredient, i) => {
      if (ingredient){
        return (
          <EditableItem
            value={ingredient}
            key={i}
            num={i}
            cardNum={this.props.cardNum}
            watchForEdits={this.watchForEdits}
          />
        );
      } else {
        return null;
      }
    });

    return (
      <ul className="ingredient-list">
        {ingredients}
      </ul>
    );
  }
}

export default CardBody;
