import React from 'react'
import { connect } from 'react-redux'
import { toggleFavorite } from '../actions'
import Button from '../components/Button'

const ToggleFavorite = ({ clickHandler, item, isFavorite }) => {
    return (
        <Button to="#" onClick={() => { clickHandler(item) }}>{isFavorite ? 'x' : '+'}</Button>
    );
};

const mapStateToProps = ({ favorites }) => {
    return {
        favorites: favorites
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFavoriteClick: (id) => {
            dispatch(toggleFavorite(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFavorite);
//export default ToggleFavorite