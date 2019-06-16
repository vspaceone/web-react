import React, { Component } from 'react';
import ReactPiwik from 'react-piwik';

class Page404 extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div className="container-fluid bg-2 text-center">
                <h1>404</h1>
                <h2>Verfahren?</h2>                
            </div>        
        );
    }
}

export default Page404;