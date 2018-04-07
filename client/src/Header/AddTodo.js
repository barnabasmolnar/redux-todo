import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodoAsync } from '../actions';
import { bindActionCreators } from 'redux';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);           
    }

    handleChange(event) {
        this.setState({todoText: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.todoText);
        this.setState({todoText: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-md-10 mx-md-auto">
                    <label className="form-control-label" htmlFor="todoInput">I need to</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="todoInput" 
                        placeholder="Do something" 
                        value={this.state.todoText} 
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addTodo: addTodoAsync
}, dispatch);

export default connect(null, mapDispatchToProps)(AddTodo);