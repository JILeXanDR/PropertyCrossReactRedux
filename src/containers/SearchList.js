import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { openDetails } from '../actions'
import Error from '../components/Error'
import Location from '../components/Location'

const mapStateToProps = ({search}) => {
    return {
        locations: search.locations,
        error: search.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLocationClick: (id) => {
            dispatch(openDetails(id))
        }
    }
};

const TodoList = ({ locations = [], error, onLocationClick }) => (
    <div>
        {!error ? <h5>Please select a location below:</h5> : <Error error={error} />}
        <div className="list-group">
            {locations.map(location => (
                <Location key={location.place_name} {...location} onLocationClick={onLocationClick}/>
            ))}
        </div>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)