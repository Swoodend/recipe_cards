import React, { Component } from 'react';
import EditableItem from './EditableItem';

class CardBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: false
    };
  }

  render(){
    let ingredients = this.props.ingredients.map((ingredient, i) => {
      if (ingredient){
        return (<EditableItem value={ingredient} key={i} num={i} watchForEdits={this.watchForEdits}/>);
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
