import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>List Task</h1>
        <h3>Todo:</h3>
        <ul className="list-unstyled">
          <li>
            <div class="checkbox">
              <label>
                <input type="checkbox"/> Task 1
              </label>
            </div>
          </li>
          <li>
            <div class="checkbox">
              <label>
                <input type="checkbox"/> Task 2
              </label>
            </div>
          </li>
          <li>
            <div class="checkbox">
              <label>
                <input type="checkbox"/> Task 3
              </label>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
