import * as action from '../constants/actionTypes';
import fetch from  'isomorphic-fetch';

let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

export const search = (text) => {
    return {
        type: action.ACTION_SEARCH,
        text: text
    }
};

const apiBaseUrl = 'http://api.nestoria.co.uk/api';

let searchByPosition = (pos) => {

    let action = 'search_listings',
        encode = 'json';

    var apiUrl = `${apiBaseUrl}?country=uk&pretty=1&action=${action}&encoding=${encode}&listing_type=buy&page=1&centre_point=${pos.coords.latitude},${pos.coords.longitude}`;

    fetch(apiUrl, {}).then((res) => {
        return res.json();
    }).then((res)=> {

        console.log(res);

        let code = res.response.application_response_code;

        if (code !== '200') {
            fail(res);
        }

    });
};

let fail = (err) => {
    alert(JSON.stringify(err.response.application_response_text));
};

export const searchByCurrentGeoLocation = () => {
    window.navigator.geolocation.getCurrentPosition(searchByPosition, fail);
};

export const searchByText = (text) => {

    let apiUrl = `${apiBaseUrl}?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${text}`;

    console.log(apiUrl);

    fetch(apiUrl, {}).then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res.response);
    });
};

export const myLocation = () => {

    searchByCurrentGeoLocation();

    return {
        type: action.ACTION_MY_LOCATION
    };
};

export const toggleFavorite = (id) => {
    return {
        type: action.TOGGLE_FAVORITE,
        id
    };
};