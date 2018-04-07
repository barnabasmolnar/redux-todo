import React from 'react';

import { connect } from "react-redux";
import { deleteTodoAsync, changeCompletedAsync, startEditing } from '../actions';
import EditListItem from './EditListItem';
import { bindActionCreators } from 'redux';

const ListItem = ({ _id, completed, changeCompleted, currentEdit, deleteTodo, startEditing, title }) => {
    return (
        <li className="list-group-item">
        {_id === currentEdit 
            ? <EditListItem title={title} /> 
            : 
            <div className="d-flex justify-content-between align-items-center" style={{width: "100%"}}>
                <span className={completed ? "done todo-title" : "todo-title"}>{title}</span>
                <span className="action-icons">
                    <label className="custom-control custom-checkbox">
                    <input type="checkbox"
                        className="custom-control-input"
                        checked={completed}
                        onChange={ () => {changeCompleted(_id)} }
                    />
                    <span className="custom-control-indicator"></span>
                    </label>
                    <i className="fa fa-pencil-square-o" onClick={ () => {startEditing(_id)} }></i>
                    <i className="fa fa-times-circle-o" onClick={ () => {deleteTodo(_id)} }></i>
                </span>
            </div>
        }
        </li>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteTodo: deleteTodoAsync,
    changeCompleted: changeCompletedAsync,
    startEditing
}, dispatch);

const mapStateToProps = ({ currentEdit }) => ({ currentEdit });

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);