import * as actionType from '../constants/actionTypes'
import fetch from  'isomorphic-fetch';

const initialState = {
    isFetching: false,
    data: {}
};

export default (state = initialState, action) => {

    switch (action.type) {

        case actionType.LISTING_REQUEST:
        {
            return Object.assign({}, state, {
                isFetching: true
            });
        }

        case actionType.LISTING_SUCCESS:
        {
            return Object.assign({}, state, {
                isFetching: false,
                error: null,
                data: action.result.listings[0] || {}
            });
        }

        case actionType.LISTING_FAILURE:
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