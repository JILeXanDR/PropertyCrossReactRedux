import * as action from '../constants/actionTypes';
import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL } from '../constants/actionTypes'
import fetch from  'isomorphic-fetch';

const loadLocationsByText = (text) => {

    const apiBaseUrl = 'http://api.nestoria.co.uk/api';

    let fail = (err) => {
        alert(JSON.stringify(err.response.application_response_text));
    };

    let apiUrl = `${apiBaseUrl}?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${text}`;

    fetch(apiUrl, {}).then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res.response);
    }).catch(fail);
};

function searchStart() {

}

export const searchByText = (text) => {
    return {
        type: action.SEARCH_START,
        payload: text
    }
};