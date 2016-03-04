import React, { PropTypes } from 'react'

export default ({active}) => {

    var loader = active ? <div className="loading"></div> : <div></div>;

    return (
        loader
    );
}