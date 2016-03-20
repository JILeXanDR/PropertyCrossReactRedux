import React from 'react'
import { browserHistory } from 'react-router'

export default ({children}) => (
    <button className="btn btn-default" onClick={() => { browserHistory.goBack() }}>Back</button>
);