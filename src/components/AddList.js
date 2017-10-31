import React, { Component } from 'react'

class AddList extends Component {
    constructor(props) {
        super(props);
    }

    handleAdd(event) {
        event.preventDefault();     
        this.props.addList(this.refs.inputTask.value);
        this.setState({
            editing:false
        })
    }

    render() {
        return (
            <div>
                <form className="form-horizontal" onSubmit={ (e) => this.handleAdd(e) }>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="task" ref="inputTask" placeholder="New Task"/>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-primary">Add Task</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddList
