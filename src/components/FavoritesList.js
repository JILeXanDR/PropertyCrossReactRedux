import React  from 'react'
import { browserHistory } from 'react-router';
import _ from 'lodash';
import FavoriteItem from 'FavoriteItem'

const FavoritesList = ({ list = [] }) => {

    let transitionToItem = ({ guid }) => {
        browserHistory.push(`/details/${guid}`);
    };

    let items = _.map(list, (item, key) => {
        return <FavoriteItem onFavoriteClick={ () => { transitionToItem(item); } } key={key} item={item}/>
    });

    return (
        <ul className="list-group favorites-list">
            {list.length ? items : "You have not added any properties to your favourites"}
        </ul>
    );
};

export default FavoritesList