import * as action from '../constants/actionTypes';
import fetch from  'isomorphic-fetch';

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const openDetails = (id) => {
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

export const myLocation = () => {

    searchByCurrentGeoLocation();

    return {
        type: action.ACTION_MY_LOCATION
    };
};

export const toggleFavorite = (item) => {
    return {
        type: action.TOGGLE_FAVORITE,
        payload: item
    };
};

export const isFavorite = (guid) => {
    return {
        type: action.IS_FAVORITE,
        payload: guid
    };
};


export const allFavorites = () => {
    return {
        type: action.ALL_FAVORITES
    };
};

export const getListing = (guid) => {
    return {
        type: action.GET_LISTING,
        guid
    };
};