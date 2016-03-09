import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL } from '../constants/actionTypes'
import fetch from  'isomorphic-fetch';

const initialState = {
    isFetching: false,
    locations: []
};

const locations = [
    {id: 1, text: 'location #1'},
    {id: 2, text: 'location #2'},
    {id: 3, text: 'location #3'}
];

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

export default (state = initialState, action) => {

    switch (action.type) {

        case SEARCH_START:
        {
            console.log('SEARCH_START');
            return Object.assign({}, state, {isFetching: true, locations: locations});
        }

        case SEARCH_SUCCESS:
        {
            console.log('SEARCH_SUCCESS');
            return Object.assign({}, state, {
                isFetching: false,
                locations: locations
            });
        }

        case SEARCH_FAIL:
        {
            console.log('SEARCH_FAIL');
            return Object.assign({}, state, {
                isFetching: false
            });
        }

        default:
        {
            return state
        }
    }
};