import React from 'react'
import { connect } from 'react-redux'
import FavoritesList from '../components/FavoritesList'

const FavoritesPage = ({ favorites = [] }) => {
    return (
        <div>
            <h4 className="text-center">Favorites</h4>
            <FavoritesList list={favorites || []}/>
        </div>
    );
};

const stateToProps = (state) => {
    return {
        favorites: state.favorites
    }
};

export default connect(stateToProps)(FavoritesPage)