import React, { Component } from 'react'

class AddList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    handleAdd(event) {
        event.preventDefault();     
        this.props.addList(this.refs.inputTask.value);
        this.setState({
            editing:false
        })
    }
    
    editTask() {
        this.setState({
            editing: true
        })
    }

    cancelEdit() {
        this.setState({
            editing: false
        })
    }

    renderForm() {
        return (
            <div>
                <form className="form-horizontal" onSubmit={ (e) => this.handleAdd(e) }>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="task" ref="inputTask" placeholder="New Task"/>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-primary">Add Task</button>
                            <button type="button" className="btn btn-danger" onClick={(e) => this.cancelEdit(e)}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    renderDisplay() {
        return(
            <div>
                <button type="button" class="btn btn-primary" onClick={(e) => this.editTask(e)}>Add New</button>
            </div>
        )
    }

    render() {
        return (this.state.editing) ? this.renderForm() : this.renderDisplay()
    }
}

export default AddList
