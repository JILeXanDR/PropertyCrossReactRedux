import React, { PropTypes } from 'react'

export default ({active}) => {

    setTimeout(() => {

    }, 1000);

    var loader = active ? <div className="loading"></div> : <div></div>;

    return (
        loader
    );
}