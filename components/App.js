import React from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import MainPage from '../containers/MainPage';
import FavoritesPage from '../containers/FavoritesPage';
import Error404 from '../containers/Error404';
import DetailsPage from '../containers/DetailsPage';
import Site from '../containers/Site';

export default () => (
    <Router history={browserHistory}>
        <Route component={Site}>
            <Route path="/" name="root" component={MainPage}/>
            <Route path="favorites" name="favorites" component={FavoritesPage}/>
            <Route path="details/:item" name="details" component={DetailsPage}/>
            <Route path="*" name="error404" component={Error404}/>
        </Route>
    </Router>
);