import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import api from '../middlewares/api'
import rootReducer from '../reducers'
import persistState from 'redux-localstorage'
import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {

    const store = createStore(
        rootReducer,
        initialState,
        //DevTools.instrument(),
        compose(
            applyMiddleware(thunk, api, createLogger())
        ),
        persistState(/*paths, config*/)
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}