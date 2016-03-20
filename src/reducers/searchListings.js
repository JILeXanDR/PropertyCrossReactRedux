import * as actionType from '../constants/actionTypes'
import fetch from  'isomorphic-fetch';

const initialState = {
    isFetching: false,
    listings: [],
    page: 1,
    totalPages: 1,
    totalResults: 0
};

export default (state = initialState, action) => {

    switch (action.type) {

        case actionType.LISTINGS_REQUEST:
        {
            return Object.assign({}, state, {
                isFetching: true
            });
        }

        case actionType.LISTINGS_SUCCESS:
        {
            return Object.assign({}, state, {
                isFetching: false,
                error: null,
                page: parseInt(action.result.page),
                totalPages: parseInt(action.total_pages || 1),
                totalResults: parseInt(action.result.total_results || 0),
                listings: action.result.listings || []
            });
        }

        case actionType.LISTINGS_FAILURE:
        {
            return Object.assign({}, state, initialState, {
                error: action.error
            });
        }

        default:
        {
            return state
        }
    }
};