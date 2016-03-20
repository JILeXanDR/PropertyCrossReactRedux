import fetch from  'isomorphic-fetch';
import { CALL_API, Schemas } from '../middlewares/api'
import * as action from '../constants/actionTypes'
import { METHOD_LOAD_LOCATIONS, METHOD_LOAD_LISTINGS, METHOD_GET_LISTING } from '../middlewares/api'

// Fetches a single repository from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchLocations(text) {
    return {
        [CALL_API]: {
            types: [action.REPO_REQUEST, action.REPO_SUCCESS, action.REPO_FAILURE],
            method: METHOD_LOAD_LOCATIONS,
            payload: {
                text: text,
                params: {}
            }
        }
    }
}

function fetchProperties(text, params) {
    return {
        [CALL_API]: {
            types: [action.LISTINGS_REQUEST, action.LISTINGS_SUCCESS, action.LISTINGS_FAILURE],
            method: METHOD_LOAD_LISTINGS,
            payload: {
                text: text,
                params: params
            }
        }
    }
}

function fetchListing(guid) {
    return {
        [CALL_API]: {
            types: [action.LISTING_REQUEST, action.LISTING_SUCCESS, action.LISTING_FAILURE],
            method: METHOD_GET_LISTING,
            payload: {
                guid: guid
            }
        }
    }
}

// Fetches a single repository from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadLocations(text) {
    return (dispatch, getState) => {
        return dispatch(fetchLocations(text))
    }
}

export function loadListingsByLocation(location, params) {
    return (dispatch, getState) => {
        return dispatch(fetchProperties(location, params))
    }
}

/**
 *
 * @param guid
 * @returns {Function}
 */
export function loadListing(guid) {
    return (dispatch, getState) => {
        return dispatch(fetchListing(guid))
    }
}