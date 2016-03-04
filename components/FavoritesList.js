import React  from 'react'
import { browserHistory } from 'react-router';
import _ from 'lodash';
import FavoriteItem from '../components/FavoriteItem'

const FavoritesList = ({list}) => {

    let transitionToItem = ({id}) => {
        browserHistory.push(`/details/${id}`);
    };

    let items = _.map(list, (item) => {
        return <FavoriteItem onFavoriteClick={ () => { transitionToItem(item); } } key={item.id} item={item}/>
    });

    return (
        <ul className="list-group favorites-list">
            {list.length ? items : "You have not added any properties to your favourites"}
        </ul>
    );
};

export default FavoritesList