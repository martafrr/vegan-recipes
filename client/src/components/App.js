import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

import Navigation from './navigation/Navigation';
import Landing from './Landing';
const RecipesDashboard = () => <h2>Recipes Dashboard</h2>
const RecipeNew = () => <h2>RecipeNew</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div >
                <BrowserRouter>
                    <div>
                        <Navigation />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/recipes" component={RecipesDashboard} />
                        <Route path="/recipes/new" component={RecipeNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);