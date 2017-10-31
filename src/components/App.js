import React, { Component } from 'react';
import '../App.css';
import TodoList from './TodoList';

var data = [
  "Task 1",
  "Task 2",
  "Task 3"
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myLists: []
    }
  }

  componentDidMount() {
    this.setState({
      myLists: data
    })
  }

  render() {
    var renderList = this.state.myLists.map(function(item, index) {
      return(
        <TodoList key={index} item={item}/>
      )
    })

    return (
      <div>
        <h1>List Task</h1>
        <h3>Todo:</h3>
        <ul className="list-unstyled">
          {renderList}
        </ul>
      </div>
    );
  }
}

export default App;
