import fetch from  'isomorphic-fetch';
import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL } from '../constants/actionTypes'

const apiBaseUrl = 'http://api.nestoria.co.uk/api';

function request(dispatch, text) {
    let apiUrl = `${apiBaseUrl}?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${text}`;

    fetch(apiUrl)
        .then(result => {
            dispatch({
                type: SEARCH_SUCCESS,
                info: result.data
            })
        })
        .catch(result => {
            dispatch({
                type: SEARCH_FAIL,
                errors: result.statusText
            })
        })
}

export function searchLocations(text) {

    return {
        type: SEARCH_START,
        payload: {
            text: text
        }
    };

    return (dispatch) => {

        request(dispatch, text);

        return {
            type: 'LOAD_INFO_REQUESTED'
        };
    }
}