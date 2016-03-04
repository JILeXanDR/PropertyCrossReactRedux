import React from 'react'
import { connect } from 'react-redux'

let Error404 = () => {
    return (
        <div>
            <h1>404</h1>
        </div>
    );
};

export default connect()(Error404);