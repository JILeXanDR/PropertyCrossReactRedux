import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import Loader from '../components/Loader'

export default connect()(({ children }) => {
    return (
        <div>
            <Loader active={false}/>

            <div className="header_btn-back text-right">
                <Button to="/">Back</Button>
            </div>

            <div>{children}</div>
        </div>
    );
});