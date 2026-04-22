import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import ReactPiwik from 'react-piwik';
import history from './history.js'

import Nav from './common/Nav.js'
import Footer from './common/Footer.js'

import Home from './page/Home.js'
import Impressum from './page/Impressum.js'
import Datenschutz from './page/Datenschutz.js'
import Downloads from './page/Downloads.js';
import FAQ from './page/FAQ.js'
import Freunde from './page/Freunde.js'
import Tour from './page/Tour.js'
import MitgliedWerden from './page/MitgliedWerden.js';
import Spenden from './page/Spenden.js';
import Page404 from './page/404.js';

import Sponsoren from './page/Sponsoren.js';

import './App.css';

class ScrollToTopComponent extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return null;
    }
}
const ScrollToTop = withRouter(ScrollToTopComponent);

const piwik = new ReactPiwik({
    url: 'https://matomo.vspace.one',
    siteId: 1,
    trackErrors: true,
    enableLinkTracking: true,
});

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
                route: window.location.hash.substr(1)
            })
        })

        this.fetchSpaceapi();
        // Repeat status fetch every second
        this.interval = setInterval(() => {
            this.fetchSpaceapi();
        }, 30000);
    }

    componentWillUnmount() {
        // Remove interval for fetching state after unmount
        clearInterval(this.interval);
    }

    fetchSpaceapi = function() {
        fetch('/spaceapi.json')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    spaceapi: json,
                    route: window.location.hash.substr(1)
                })                
            })
    }

    render() {
        document.body.style.backgroundColor = "#0f1117"
        return (
        <Router history={piwik.connectToHistory(history)}>
            <ScrollToTop />
            <div className="site">
                <Route 
                    path="/"                 
                    render={routeProps => (
                        <div>
                            <Nav {...routeProps} state={this.state.spaceapi.state}/>
                        </div>
                    )} 
                />

                <div className="site-content">
                    <Switch>
                        <Route 
                            path="/" exact 
                            render={routeProps => (
                                <Home {...routeProps} spaceapi={this.state.spaceapi}/>
                            )}  
                        />

                        <Route 
                            path="/impressum" exact 
                            render={routeProps => (
                                <Impressum {...routeProps} spaceapi={this.state.spaceapi}/>
                            )}  
                        />

                        <Route 
                            path="/datenschutz" exact 
                            render={routeProps => (
                                <Datenschutz {...routeProps} spaceapi={this.state.spaceapi}/>
                            )}  
                        />

                        <Route 
                            path="/downloads" exact 
                            render={routeProps => (
                                <Downloads {...routeProps} spaceapi={this.state.spaceapi}/>
                            )}  
                        />

                        <Route 
                            path="/faq" exact 
                            render={routeProps => (
                                <FAQ {...routeProps} spaceapi={this.state.spaceapi}/>
                            )}  
                        />

                        <Route 
                            path="/mitgliedwerden" exact 
                            render={routeProps => (
                                <MitgliedWerden {...routeProps} spaceapi={this.state.spaceapi}/>
                            )}  
                        />

                        <Route 
                            path="/spenden" exact 
                            render={routeProps => (
                                <Spenden {...routeProps} spaceapi={this.state.spaceapi}/>
                            )}  
                        />

                        <Route 
                            path="/sponsoren" exact 
                            render={routeProps => (
                                <Sponsoren {...routeProps} spaceapi={this.state.spaceapi}/>
                            )}  
                        />

                        <Route 
                            path="/freunde" exact 
                            render={routeProps => (
                                <Freunde {...routeProps} spaceapi={this.state.spaceapi}/>
                            )}  
                        />

                        <Route 
                            path="/tour" exact 
                            render={routeProps => (
                                <Tour {...routeProps} spaceapi={this.state.spaceapi}/>
                            )}  
                        />

                        <Route
                            component={Page404}/>
                    </Switch>
                </div>
                

                <Route path="/" component={Footer} />

                <CookieConsent
                    location="bottom"
                    buttonText="Einverstanden"
                    declineButtonText="Nicht Einverstanden"
                    enableDeclineButton
                    cookieName="cookieConsent"
                    style={{ background: "#1a1d28", borderTop: "1px solid rgba(255,255,255,0.06)" }}
                    buttonStyle={{ background: "#0ac26c", color: "#fff", fontSize: "13px", borderRadius: "20px", padding: "8px 20px" }}
                    declineButtonStyle={{ fontSize: "13px" }}
                >
                    Wir benutzen Cookies um diese Seite schöner zu machen.
                    Siehe <Link to="/datenschutz">Datenschutzerklärung</Link>.
                </CookieConsent>

            </div>            
        </Router>
        );
    }
}

export default App;
