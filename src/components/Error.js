import React from 'react'

export default ({ children, error }) => (
    <h5 className="error">There was a problem with your search: <span className="error-message">{error}</span></h5>
);