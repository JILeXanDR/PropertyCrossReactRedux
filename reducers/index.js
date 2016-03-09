import { combineReducers } from 'redux'
//import todos from './todos'
//import visibilityFilter from './visibilityFilter'
import favorite from './favorite'
import search from './search'

const todoApp = combineReducers({
    //todos,
    //visibilityFilter,
    favorite,
    search,
});

export default todoApp