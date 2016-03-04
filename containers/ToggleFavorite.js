import React from 'react'
import { connect } from 'react-redux'
import { toggleFavorite } from '../actions'
import Button from '../components/Button'

const ToggleFavorite = ({onFavoriteClick, id, isFavorite}) => (
    <Button to="#" onClick={() => { onFavoriteClick(id) }}>{isFavorite ? '-' : '+'}</Button>
);

const mapStateToProps = (state) => {
    return {
        isFavorite: false
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFavoriteClick: (id) => {
            console.log(id);
            dispatch(toggleFavorite(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFavorite);