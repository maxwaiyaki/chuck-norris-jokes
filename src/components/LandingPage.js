import React, { Component } from 'react';
import Posts from './CategoryList';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1 className="my-3 text-center font-weight-bold">Chuck Norris Jokes</h1>
                    < p className="text-center" > Select any of the categories to see a joke. </p>
                </header>
                <Posts/>
            </div>
        );
    }
}

export default LandingPage;