import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Will Schechter",
      todoItems: [
        { action: "Complete Lab 2", done: false },
        { action: "Publish to Github", done: false },
        { action: "Submit Assignment", done: false }
      ]
    };
  }
  updateNewTextValue = event => {
    this.setState({ newItemText: event.target.value });
  };
  
  createNewTodo = () => {
    if (
      !this.state.todoItems.find(item => item.action === this.state.newItemText)
    ){
      this.setState({
        todoItems: [
          ... this.state.todoItems,
          {
            action: this.state.newItemText,
            done: false
          }
        ],
        newItemText: ""
      });
    } 
  };
  toggleToDo = todo =>
    this.setState({
      todoItems: this.state.todoItems.map(item =>
        item.action === todo.action ? { ... item, done: !item.done } : item
      )
    });
  
  todoTableRows = () =>
    this.state.todoItems.map(item => (
        <tr key={item.action}>
          <td>{item.action}</td>
          <td>
            <input
              type="checkbox"
              checked={item.done}
              onChanged={() => this.toggleToDo(item)}
              />
          </td>
        </tr>
      ));
    

  
  render = () => (
    <div> 
      <h4 className="bg-primary text-white text-center p-2">
        {this.state.userName}'s To Do List
        </h4>
        <div className= "container-fluid">
          <div className="my=1">
            <input
              className = "form-control"
              value={this.updateNewTextValue}
            />
        <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
          Add 
        </button>
        <table className= "table table-striped table-bordered">
          <thread>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thread>
          <tbody>{this.todoTableRows()}</tbody>
        </table>
      </div>
    </div>
  </div>
  ); 
  }
  
  
