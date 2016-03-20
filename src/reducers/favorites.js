import { TOGGLE_FAVORITE, ALL_FAVORITES, IS_FAVORITE } from '../constants/actionTypes'
import localStorageService from '../services'
import _ from 'lodash'

const initialState = localStorageService.get('favorites', []);

export default (state = initialState, action) => {
    switch (action.type) {

        case ALL_FAVORITES:
        {
            return [...state];
        }

        case TOGGLE_FAVORITE:
        {
            let newState = [...state];

            let isExists = false;

            newState.forEach((item, index) => {
                if (item.guid === action.payload.guid) {
                    isExists = true;
                    newState.splice(index, 1); // удалить с избранного
                }
            });

            if (!isExists) {
                newState.push(action.payload); // Добавить в избранное
            }

            localStorageService.set('favorites', newState);
            return newState;
        }

        default:
        {
            return state
        }
    }
};