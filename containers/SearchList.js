import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { toggleTodo } from '../actions'
import Todo from '../components/Todo'

const mapStateToProps = ({search}) => {
    return {
        locations: search.locations
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLocationClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

const TodoList = ({ locations, onLocationClick }) => (
    <div>
        <h5>Please select a location below:</h5>
        <div className="list-group">
            {locations.map(location => (
                <Todo key={location.id} {...location} onLocationClick={onLocationClick}/>
            ))}
        </div>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)