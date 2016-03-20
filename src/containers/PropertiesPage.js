import React from 'react'
import { connect } from 'react-redux'
import { loadListingsByLocation } from '../actions/searchLocations'
import LoadMore from '../components/LoadMore'
import Header from '../components/Header'
import PropertiesList from '../components/PropertiesList'

class PropertiesPageClass extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadListings(this.props.params.item, {page: this.props.page});
    }

    render() {

        let loadHandler = () => {
            const nextPage = this.props.page + 1;
            this.props.loadListings(this.props.params.item, {page: nextPage});
        };

        return (
            <div>

                <h5 className="text-center">
                    {this.props.listings.length} of {this.props.totalResults} matches
                </h5>

                <PropertiesList list={this.props.listings} emptyMessage="There are no listings found"/>

                <LoadMore show={this.props.totalPages > this.props.page} loadHandler={loadHandler}/>

            </div>
        );
    }
}

const mapStateToProps = ({ searchListings }) => {
    return {
        listings: searchListings.listings,
        totalResults: searchListings.totalResults,
        page: searchListings.page,
        totalPages: searchListings.totalPages,
        error: searchListings.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadListings: (location, params) => {
            dispatch(loadListingsByLocation(location, params))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesPageClass);