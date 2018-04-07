import axios from 'axios';
import {
    ADD_TODO,
    DELETE_TODO,
    CHANGE_COMPLETED,
    EDIT_TODO,
    START_EDITING,
    STOP_EDITING,
    SET_VISIBILITY_FILTER,
    FETCH_TODOS
} from './actionConstants';

export function addTodo(title, id) {
    return { type: ADD_TODO, title, id };
};

export function deleteTodo(id) {
    return { type: DELETE_TODO, id };
};

export function changeCompleted(id) {
    return { type: CHANGE_COMPLETED, id };
};

export function editTodo(id, title) {
    return { type: EDIT_TODO, id, title };
};

export function startEditing(id) {
    return { type: START_EDITING, id };
};

export function stopEditing() {
    return { type: STOP_EDITING };
};

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
};


// Async stuff:
export function fetchTodos() {
    return (dispatch) => {
        axios.get("/api/todos")
            .then(({ data: { result }}) => dispatch({ type: FETCH_TODOS, todos: result}))
    }
}

export function addTodoAsync(title) {
    return (dispatch) =>
        axios.post("/api/todos", { title })
            .then(({ data: { title, _id }}) => dispatch(addTodo(title, _id)))
    
}

export function deleteTodoAsync(id) {
    return (dispatch) =>
        axios.delete("/api/todos/" + id)
            .then(() => {
                dispatch(deleteTodo(id))
            })
}

export function changeCompletedAsync(id) {
    return (dispatch, getState) => {
        const completedVal = getState().todos.find(todo => todo._id === id).completed;
        axios.patch("/api/todos/" + id, { completed: !completedVal })
            .then(() => {
                dispatch(changeCompleted(id))
            })
    }
};

export function editTodoAsync(id, title) {
    return (dispatch) =>
        axios.patch("/api/todos/" + id, { title: title })
        .then(() => {
            dispatch(editTodo(id, title));
            dispatch(stopEditing())
        })
};