import React, { Component } from 'react';

class AddItem extends Component {
  state = {
    name: "",
    age: "",
    email : "",
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmite = (e) => {
    e.preventDefault();
    if (e.target.name.value === "") {
      return false
    } else {
      this.props.AddItem(this.state)
      this.setState({
        name: "",
        age: "",
        email : "",
      })
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmite} >
          <input onChange={this.handleChange} type="text" placeholder="Enter Your Name" id="name" value={this.state.name} />
          <input onChange={this.handleChange} type="number" placeholder="Enter Your Age" id="age" value={this.state.age} />
          <input onChange={this.handleChange} type="email" placeholder="Enter Your email" id="email" value={this.state.email} />
          <input type="submit" value="Add Item" />
        </form>
      </div>
    )
  }
}
export default AddItem;

