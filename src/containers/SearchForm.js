import React from 'react'
import { connect } from 'react-redux'
import { myLocation } from '../actions'
import * as searchActions from '../actions/search'
import { loadLocations } from '../actions/searchLocations'
import Button from '../components/Button'

let SearchForm = ({ loadLocations }) => {

    let input;

    let onSubmit = (e) => {

        e.preventDefault();

        if (!input.value.trim()) {
            return
        }

        loadLocations(input.value);
        input.value = '';
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control input-sm"
                           placeholder="Enter location name here..." ref={node => {input = node}}/>
                    <div className="input-group-btn">
                        <button type="submit" className="btn btn-sm btn-default btn-secondary">Go</button>
                        <button type="button" className="btn btn-sm btn-default btn-secondary" onClick={myLocation}>My
                            location
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadLocations: (value) => {
            dispatch(loadLocations(value))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);