import 'isomorphic-fetch'

export const METHOD_LOAD_LOCATIONS = 'METHOD_LOAD_LOCATIONS';
export const METHOD_LOAD_LISTINGS = 'METHOD_LOAD_LISTINGS';
export const METHOD_GET_LISTING = 'METHOD_GET_LISTING';

const API_ROOT = 'http://api.nestoria.co.uk/api';

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

function getMethod(method, payload = {}) {

    let { page = 1 } = payload;
    let baseUrl = `${API_ROOT}?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=${page}`;

    switch (method) {
        case METHOD_LOAD_LOCATIONS:
        case METHOD_LOAD_LISTINGS:
        {
            return `${baseUrl}&place_name=${payload.text}`;
        }
        case METHOD_GET_LISTING:
        {
            const { guid } = payload;
            return `${baseUrl}&guid=${guid}`;
        }
    }

    throw new Error(`Попытка вызова несуществующего метода ${method}`);
}

/**
 *
 * @param method
 * @param payload
 * @returns {*|Promise.<T>}
 */
function callApi(method, payload = {}) {

    payload.params = payload.params || {};

    const baseUrl = getMethod(method, payload);

    return fetch(baseUrl)

        .then((response) => response.json().then((json) => ({json, response})))

        .then(({ json, response }) => {

            if (!response.ok) {
                return Promise.reject(json)
            }

            return Object.assign({}, json);
        });
}

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default (store) => (next) => (action) => {

    const callAPI = action[CALL_API]; // то что передали с action

    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    const { types, payload, method } = callAPI;

    console.log({
        payload: payload
    });

    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.')
    }

    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.')
    }

    const [ requestType, successType, failureType ] = types;

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction
    }

    let nextActionWith = (data) => {
        next(actionWith(data));
    };

    nextActionWith({type: requestType}); // говорим что запрос был отправлен

    let callback = (type) => (result) => {

        let data = {};
        let successCodes = [100, 101, 110, 111, 200, 202];

        //console.log({
        //    type: typeof result,
        //    result: result,
        //});

        if (result instanceof Error) {
            data = {type: failureType, error: result.message};
        } else {

            const responseCode = parseInt(result.response.application_response_code);
            const responseText = result.response.application_response_text;

            if (successCodes.indexOf(responseCode) !== -1) {
                data = {result: result.response, type: successType};
            } else {
                data = {type: failureType, error: responseText};
            }
        }

        //if (type === 'fail') {
        //
        //} else {
        //
        //
        //}
        //
        //if (typeof result !== "object") {
        //    // data = {type: failureType, error: result};
        //    return;
        //} else {
        //
        //
        //
        //    //if (type === 'ok') {
        //    //
        //    //
        //    //
        //    //} else if (type === 'fail') {
        //    //} else {
        //    //    throw new Error(`Callback для "${type}" не существует!`);
        //    //}
        //}

        //console.log({
        //    type: type,
        //    resOrError: result
        //});

        nextActionWith(data);
    };

    return callApi(method, payload).then(
        callback('ok')
    ).catch(
        callback('fail')
    );
}