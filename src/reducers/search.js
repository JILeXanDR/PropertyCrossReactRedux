import * as actionType from '../constants/actionTypes'
import fetch from  'isomorphic-fetch';

const initialState = {
    isFetching: false,
    locations: []
};

export default (state = initialState, action) => {

    switch (action.type) {

        case actionType.REPO_REQUEST:
        {
            return Object.assign({}, state, {
                isFetching: true
            });
        }

        case actionType.REPO_SUCCESS:
        {
            return Object.assign({}, state, {
                isFetching: false,
                error: null,
                locations: action.result.locations || []
            });
        }

        case actionType.REPO_FAILURE:
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