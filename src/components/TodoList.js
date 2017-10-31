import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    handleCheck(e) {
        var target = e.target;
        if (target.checked) {
            this.props.moveList(this.props.item)
        }
    }
    
    render() {
        return (
            <li>
                <div className="checkbox">
                <label>
                    <input type="checkbox" onChange={(e) => this.handleCheck(e)}/>{this.props.item}
                </label>
                </div>
            </li>
        );
    }
}

export default TodoList
