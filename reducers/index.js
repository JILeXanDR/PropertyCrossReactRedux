import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import favorite from './favorite'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    favorite
});

export default todoApp