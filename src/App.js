import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from './common/Nav.js'
import Footer from './common/Footer.js'

import Home from './page/Home.js'

import './App.css';

class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            spaceapi: [],
            route: ""
        } 
    }

    getInitialState() {
        return {
            route: window.location.hash.substr(1)
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                spaceapi: [],
                route: window.location.hash.substr(1)
            })
        })

        // Repeat status fetch every second
        this.interval = setInterval(() => {
            fetch('/spaceapi.json')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    spaceapi: json,
                    route: window.location.hash.substr(1)
                })

                
            })
        }, 1000);
    }

    componentWillUnmount() {
        // Remove interval for fetching state after unmount
        clearInterval(this.interval);
    }

    render() {
        return (
        <Router>
            <div>
            <Route path="/" component={Nav} />

            <Route 
                path="/" exact 
                render={routeProps => (
                    <Home {...routeProps} spaceapi={this.state.spaceapi}/>
                )}  
            />

            <Route path="/" component={Footer} />
            </div>
        </Router>
        );
    }
}

export default App;
