import React, { Component } from 'react';
import ReactPiwik from 'react-piwik';

class Page404 extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div className="container-fluid bg-2 text-center page-404">
                <h1>404</h1>
                <h2>Diese Seite gibt es leider nicht.</h2>
                <p>Zurück zur <a href="/">Startseite</a>?</p>
            </div>
        );
    }
}

export default Page404;
