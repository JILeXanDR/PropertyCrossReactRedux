import React from 'react'
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import Top from '../components/Top'

const mapStateToProps = ({ search, searchListings, listing }) => {
    return {
        isFetching: search.isFetching || searchListings.isFetching || listing.isFetching
    }
};

export default connect(mapStateToProps)(({ children, isFetching }) => {
    return (
        <div>
            <Loader active={isFetching}/>

            <Top />

            <div>{children}</div>
        </div>
    );
});