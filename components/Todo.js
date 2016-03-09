import React, { PropTypes } from 'react'

const Todo = ({ onLocationClick, id, text }) => (
    <a className="list-group-item" onClick={() => onLocationClick(id)}>{text}</a>
);

//Todo.propTypes = {
//    onClick: PropTypes.func.isRequired,
//    completed: PropTypes.bool.isRequired,
//    text: PropTypes.string.isRequired
//};

export default Todo