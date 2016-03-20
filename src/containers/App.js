import React from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import MainPage from './MainPage';
import FavoritesPage from './FavoritesPage';
import Error404 from './Error404';
import DetailsPage from './DetailsPage';
import PropertiesPage from './PropertiesPage';
import Site from './Site';

export default () => (
    <Router history={browserHistory}>
        <Route component={Site}>
            <Route path="/" name="root" component={MainPage}/>
            <Route path="favorites" name="favorites" component={FavoritesPage}/>
            <Route path="listings/:item" name="listings" component={PropertiesPage}/>
            <Route path="details/:item" name="details" component={DetailsPage}/>
            <Route path="*" name="error404" component={Error404}/>
        </Route>
    </Router>
);