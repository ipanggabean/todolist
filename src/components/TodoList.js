import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <li>
                <div className="checkbox">
                <label>
                    <input type="checkbox"/>{this.props.item}
                </label>
                </div>
            </li>
        );
    }
}

export default TodoList
