import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash';
import { addTodo, myLocation } from '../actions'

const FavoriteItem = ({item, onFavoriteClick}) => {
    return (
        <li className="favorite-item" onClick={onFavoriteClick}>
            <div className="favorite-item_image">
                <img src={item.img_url} alt="hotel image"/>
            </div>
            <div className="favorite-item_content">
                <div className="favorite-item_content_price">{item.price_formatted}</div>
                <div className="favorite-item_content_description">{item.summary}</div>
            </div>
        </li>
    );
};

export default FavoriteItem;