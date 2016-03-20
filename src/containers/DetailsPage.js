import React from 'react'
import { connect } from 'react-redux'
import { toggleFavorite, isFavorite } from '../actions'
import { loadListing } from '../actions/searchLocations'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Button from '../components/Button'
import ToggleFavorite from 'ToggleFavorite'

const mapStateToProps = ({ listing }) => {
    return {
        listing: listing
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFavorite: (item) => {
            dispatch(toggleFavorite(item))
        },
        loadListing: (id) => {
            dispatch(loadListing(id))
        },
    }
};

class DetailsPageClass extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { item } = this.props.params;
        this.props.loadListing(item);
    }

    render() {

        console.log('render DetailsPageClass');

        let { listing }  = this.props;
        let { item } = this.props.params;

        listing = listing.data;

        let shortTitle = (title = '') => {

            var data = title.split(', ');

            return data.slice(0, 2).join(', ');
        };

        let clickHandler = (item) => {
            this.props.toggleFavorite(item);
        };

        let isFavorite = (item) => {
            return false;
        };

        return (
            <div>
                <Header>
                    Property Details <ToggleFavorite item={listing} clickHandler={clickHandler}
                                                     isFavorite={isFavorite(listing)}/>
                </Header>

                <div>{listing.price_formatted}</div>
                <div>{shortTitle(listing.title)}</div>

                <div>
                    <img src={listing.img_url} alt="img"/>
                </div>

                <div>{listing.bedroom_number} bad, {listing.bathroom_number} bathrooms</div>
                <div>{listing.summary}</div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPageClass);