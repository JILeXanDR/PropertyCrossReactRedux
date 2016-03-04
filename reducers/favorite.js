import { TOGGLE_FAVORITE } from '../constants/actionTypes'

export default (state = TOGGLE_FAVORITE, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            return action;
        default:
            return state
    }
};