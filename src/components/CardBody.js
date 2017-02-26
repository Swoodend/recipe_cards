import React, { Component } from 'react';

class CardBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: false,
    };
  }

  render(){
    let ingredients = this.props.ingredients.map((ingredient, i) => {
      return (<li key={i}>{ingredient}</li>);
    })
    return (
      <ul className="ingredient-list">
        {ingredients}
      </ul>
    );
  }
}

export default CardBody;
