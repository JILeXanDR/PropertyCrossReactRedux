export default class localStorageService {

    static get(item, defaultValue = null) {

        let res = null;

        try {
            let value = window.localStorage.getItem(item) || '';
            res = JSON.parse(value);
        } catch (e) {
            res = defaultValue;
        }

        return res;

        // return (typeof value === "undefined" || value === null) ? defaultValue : JSON.parse(value);
    }

    static set(item, value) {
        window.localStorage.setItem(item, JSON.stringify(value));
    }
}