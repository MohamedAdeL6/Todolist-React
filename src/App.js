import React, {Component} from 'react';
import './App.css';
import TodoItem from './Component/TodoItem/TodoItem';
import AddItem from './Component/AddItem/AddItem';
class App extends Component {
  state= {
      items: [
        {id: 1 ,name: "Mohamed", age: 25, email : "mohamed123@gmial.com"},
        {id: 2 ,name: "Hussein", age: 21, email : "hussein123@gmial.com"},
        {id: 3 ,name: "Ahmed", age: 22, email : "ahmed123@gmial.com"},
      ]
  }
  DeleteItem = (id) => {
    let items = this.state.items.filter( item => {
      return item.id !== id
    })
    this.setState({
      items : items
    })
  }
  AddItem = (item) => {
    item.id = Math.random()
    let items = this.state.items;
    items.push(item)
    this.setState({
       items : items
     })
  }
  
  render(){
    return(
      <div className='App container'>
        <h1 className='text'> Todo List </h1>
        <AddItem AddItem={this.AddItem} /> 
        <TodoItem items = {this.state.items} DeleteItem={this.DeleteItem}/>
                  
      </div>
    )
  }
}
export default App;


