import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash';
import { addTodo, myLocation } from '../actions'

const FavoriteItem = ({item, children, onFavoriteClick}) => {
    return (
        <li className="favorite-item" onClick={onFavoriteClick}>
            <div className="favorite-item_image">
                <img src={item.image} alt="hotel image"/>
            </div>
            <div className="favorite-item_content">
                <div className="favorite-item_content_price">{item.price}</div>
                <div className="favorite-item_content_description">{item.text}</div>
            </div>
        </li>
    );
};

export default FavoriteItem;