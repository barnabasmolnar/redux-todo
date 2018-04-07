import React, { Component } from 'react';

import { connect } from "react-redux";
import { editTodoAsync, stopEditing } from '../actions';
import { bindActionCreators } from 'redux';

class EditListItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todoText: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(event) {
        this.setState({todoText: event.target.value});
    }

    handleSubmit(event) {
        this.props.editTodo(this.props.currentEdit, this.state.todoText);
        event.preventDefault();
    }

    handleKeyDown(event) {
        if (event.key === "Escape") {
            this.props.stopEditing();
        }
    }

    render() {
        return (
            <form className="col-10 pl-0" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    className="form-control"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    placeholder={this.props.title}
                    autoFocus
                />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
	editTodo: editTodoAsync,
    stopEditing
}, dispatch);

const mapStateToProps = ({ currentEdit }) => ({ currentEdit });

export default connect(mapStateToProps, mapDispatchToProps)(EditListItem);
