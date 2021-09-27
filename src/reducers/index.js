import { connect } from 'react-redux';
import { combineReducers } from 'redux';

const todos = (state = [], action) => {
    if (action.type === "ADD_TODO") {
        return [...state, action.todo];
    }
    return state;
}

export default combineReducers({
    todos,
});