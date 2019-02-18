import React, { Component } from 'react';
import Posts from './CategoryList';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Welcome to ChuckNorris App</h1>
                    <h3>Choose a category</h3>
                </header>
                <Posts/>
            </div>
        );
    }
}

export default LandingPage;