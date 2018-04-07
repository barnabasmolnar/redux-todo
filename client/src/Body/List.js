import React from 'react';
import { connect } from "react-redux";
import ListItem from './ListItem';
import { Visibility } from '../actionConstants';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case Visibility.SHOW_ALL:
            return todos
        case Visibility.SHOW_COMPLETED:
            return todos.filter(({completed}) => completed)
        case Visibility.SHOW_TODO:
            return todos.filter(({completed}) => !completed)
        default:
            return todos
    }
}

const List = ({ todos }) => {
    return (
        <div className="card-body col-md-10 mx-md-auto mt-4">
            <ul className="list-group">
                {todos.map(todo => <ListItem {...todo} key={todo._id} />)}
            </ul>
        </div>
    )
}

const mapStateToProps = ({ todos, visibilityFilter }) => ({ todos: getVisibleTodos(todos, visibilityFilter) });

export default connect(mapStateToProps)(List);