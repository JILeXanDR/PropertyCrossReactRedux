import React from 'react'
import { connect } from 'react-redux'
import SearchForm from 'SearchForm'
import SearchList from 'SearchList'
import Header from '../components/Header'
import Button from '../components/Button'

export default connect()(() => {
    return (
        <div>

            <Header>
                <Button btnType="success" btnSize="xs" to="/favorites">Favorites</Button>
            </Header>

            <div className="well well-sm">
                Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My
                location', to search in your current location!
            </div>

            <SearchForm />
            <SearchList />
        </div>
    );
});