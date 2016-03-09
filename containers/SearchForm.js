import React from 'react'
import { connect } from 'react-redux'
import { addTodo, myLocation, searchByText } from '../actions'
import * as searchActions from '../actions/search'
import { searchLocations } from '../actions/searchLocations'
import Button from '../components/Button'

let SearchForm = ({ dispatch }) => {

    let input;

    let onSubmit = (e) => {

        e.preventDefault();

        if (!input.value.trim()) {
            return
        }

        dispatch(searchLocations(input.value));
        input.value = '';
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input className="form-control input-sm" ref={node => {input = node}}/>
                <Button btnType="default">Go</Button>
                <Button btnType="default" onClick={myLocation}>My location</Button>
            </form>
        </div>
    );
};

export default connect()(SearchForm);