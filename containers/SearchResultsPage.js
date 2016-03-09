import React from 'react'
import { connect } from 'react-redux'
import { addTodo, myLocation } from '../actions'
import { browserHistory, Router, Route, Link } from 'react-router'

import AddTodo from 'SearchForm';
import VisibleTodoList from 'SearchList';
import Footer from '../components/Footer';
import Header from '../components/Header'


let SearchResultsPage = () => {
    return (
        <div>
            <Header>
                Search Results Page
            </Header>
        </div>
    );
};

export default connect()(SearchResultsPage);