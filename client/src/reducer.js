import { combineReducers } from "redux";
import {
    ADD_TODO,
    DELETE_TODO,
    CHANGE_COMPLETED,
    EDIT_TODO,
    START_EDITING,
    STOP_EDITING,
    SET_VISIBILITY_FILTER,
    FETCH_TODOS,
    Visibility
} from './actionConstants';

const initialState = [];

const todos = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return action.todos
        case ADD_TODO:
            return [...state, {_id: action.id, title: action.title, completed: false}]
        case DELETE_TODO:
            return state.filter((todoItem) => todoItem._id !== action.id)
        case CHANGE_COMPLETED:
            return state.map((todoItem) => 
                todoItem._id === action.id
                    ? {...todoItem, completed: !todoItem.completed} 
                    : todoItem
            );
        case EDIT_TODO:
            return state.map((todoItem) => 
                todoItem._id === action.id
                    ? {...todoItem, title: action.title} 
                    : todoItem
            );
        default:
            return state;
    }
};

const currentEdit = (state=null, action) => {
    switch (action.type) {
        case START_EDITING:
            return action.id
        case STOP_EDITING:
            return null
        default:
            return state
    }
};

const visibilityFilter = (state=Visibility.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

const reducers = combineReducers({todos, currentEdit, visibilityFilter});

export default reducers;