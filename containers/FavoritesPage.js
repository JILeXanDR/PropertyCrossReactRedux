import React from 'react'
import { connect } from 'react-redux'
import { addTodo, myLocation } from '../actions'
import FavoritesList from '../components/FavoritesList'

const FavoritesPage = () => {

    let getFavoritesList = () => {
        return [
            {id: 1, text: 'text1', price: '340,142', image: 'http://nomera.odessa.ua/thumb.php?src=http://nomera.odessa.ua/wp-content/gallery/521/bs4.jpg&w=124&h=94&zc=1&q=80'},
            {id: 2, text: 'text2', price: '430,222', image: 'http://nomera.odessa.ua/wp-content/gallery/54/thumbs/thumbs_busi42109509329.jpg'},
            {id: 3, text: 'text3', price: '320,422', image: 'http://nomera.odessa.ua/wp-content/gallery/54/thumbs/thumbs_HLuxe31924193260.jpg'}
        ];
    };

    return (
        <div>
            <h4 className="text-center">Favorites</h4>
            <FavoritesList list={getFavoritesList()}/>
        </div>
    );
};

export default connect()(FavoritesPage);