import React, { Component } from 'react';

class EditableItem extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      editing: false,
      lastVal: '',
      val: ''
    };
  }

  handleClick(){
    this.setState({
      editing: true,
      val: ''
    }, () => {
      this.refs.textInput.focus();
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      editing: false,
      val: this.refs.textInput.value,
      lastVal: this.refs.textInput.value
    }, () => {
      this.props.watchForEdits(this.props.cardNum, this.props.num, this.state.val);
    });
  }

  handleChange(e){
    this.setState({
      lastVal: e.target.value
    });
  }

  render(){
    if(!this.state.editing){
      return (
        <li onClick={this.handleClick} ref="ingredient">{this.state.val ||this.props.value}</li>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <input className="editable-input"ref="textInput" type="text" onChange={this.handleChange} value={this.state.val || this.state.lastVal} />
        </form>
      );
    }
  }
}

export default EditableItem;
