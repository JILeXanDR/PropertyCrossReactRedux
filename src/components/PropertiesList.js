import React  from 'react'
import { browserHistory } from 'react-router';
import _ from 'lodash';
import PropertyItem from 'PropertyItem'

const PropertiesList = ({list, emptyMessage = 'You have not added any properties to your favourites'}) => {

    let transitionToItem = ({ guid }) => {
        browserHistory.push(`/details/${guid}`);
    };

    let items = _.map(list, (item, index) => {
        return <PropertyItem onItemClick={ () => { transitionToItem(item); } } key={index} item={item}/>
    });

    return (
        <ul className="list-group favorites-list">
            {list.length ? items : emptyMessage}
        </ul>
    );
};

export default PropertiesList