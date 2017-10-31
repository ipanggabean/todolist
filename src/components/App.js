import React, { Component } from 'react';
import '../App.css';
import TodoList from './TodoList';
import AddList from './AddList';
import request from 'superagent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myLists: [],
      doneLists:[],
    }
  }

  componentDidMount() {
    var self = this;

    request
      .get('data.json')
      .end((err, res) => {
        if(err) throw err;
        this.setState({
          myLists: res.body
        })
      });    
  }

  addItem(tempItem) {
    var tempTasks = this.state.myLists;
    tempTasks.push(tempItem);
    this.setState({
      myLists: tempTasks
    });
  }

  handleMove(tempItem) {
    var tempTasks;
    var doneTasks;

    if (this.state.myLists.indexOf(tempItem)!=-1) {
      tempTasks = this.state.myLists.filter(item => item.toLowerCase() != tempItem.toLowerCase())
      doneTasks = this.state.doneLists;
      doneTasks.push(tempItem);
    } else {
      doneTasks = this.state.doneLists.filter(item => item.toLowerCase() != tempItem.toLowerCase())
      tempTasks = this.state.myLists;
      tempTasks.push(tempItem);
    }
    this.setState({
      myLists: tempTasks,
      doneLists: doneTasks
    })
  }

  render() {
    var renderList = this.state.myLists.map((item, index) => {
      return(
        <TodoList 
          key={index} 
          item={item}          
          moveList={ (e) => this.handleMove(e) }
        />
      )
    })

    var renderDone = this.state.doneLists.map((item, index) => {
      return(
        <TodoList
          key={index}
          item={item}
          moveList={ (e) => this.handleMove(e) }
        />
      )
    })

    return (
      <div>
        <h1>List Task</h1>
        <AddList 
          addList={ (e) => this.addItem(e) } 
        />
        <h3>Todo:</h3>
        <ul className="list-unstyled">
          {renderList}
        </ul>

        <h3>Done:</h3>
        <ul className="list-unstyled">
          {renderDone}
        </ul>
      </div>
    );
  }
}

export default App;
