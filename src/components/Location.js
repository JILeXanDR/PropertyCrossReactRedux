import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router';

let details = (id) => {
    browserHistory.push(`/listings/${id}`);
};

const Location = ({ onLocationClick, place_name, title }) => (
    <a className="list-group-item" onClick={() => details(place_name)}>{title}</a>
);

//Todo.propTypes = {
//    onClick: PropTypes.func.isRequired,
//    completed: PropTypes.bool.isRequired,
//    text: PropTypes.string.isRequired
//};

export default Location