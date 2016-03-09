import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import Loader from '../components/Loader'

const mapStateToProps = ({search}) => {
    return {
        search: search
    }
};

export default connect(mapStateToProps)(({ children, search }) => {

    const isFetching = search.isFetching;

    return (
        <div>
            <Loader active={isFetching}/>

            <div className="header_btn-back text-right">
                <Button to="/">Back</Button>
            </div>

            <div>{children}</div>
        </div>
    );
});