import React, { Component } from 'react';

class DeleteButton extends Component {
  render(){
    return (
      <div onClick={this.props.click} className="delete-button">
        x
      </div>
    );
  }
}

export default DeleteButton;
