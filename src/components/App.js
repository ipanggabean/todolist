import React, { Component } from 'react';
import '../App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>List Task</h1>
        <h3>Todo:</h3>
        <ul className="list-unstyled">
          <TodoList item="Task 1"/>
          <TodoList item="Task 2"/>
          <TodoList item="Task 3"/>
        </ul>
      </div>
    );
  }
}

export default App;
