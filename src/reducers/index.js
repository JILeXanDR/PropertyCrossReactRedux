import { combineReducers } from 'redux'
import favorites from './favorites'
import search from './search'
import searchListings from './searchListings'
import listing from './listing'

const todoApp = combineReducers({
    favorites,
    search,
    searchListings,
    listing,
});

export default todoApp