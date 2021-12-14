import React, { Component } from 'react';
import ReactPiwik from 'react-piwik';

class Downloads extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div className="container-fluid bg-3 text-center label-warning" id="downloads">
            <div style={{marginBottom: '2rem'}} className="row">
                    <div className="col-sm-12">
                        <h1>Downloads</h1>
                    </div>
                </div>
            <div className="row">
                <div style={{textAlign:'center'}} className="col-sm-12">
                    <ul>
                        <li><a href="download/satzung_v1.1.pdf">Satzung</a></li>
                        <li><a href="download/beitragsordnung_v1.2.pdf">Beitragsordnung</a></li>
                        <li><a href="download/beitrittserklaerung_v1.2.pdf">Beitrittserklärung</a></li>
                        <li><a href="download/beitrittserklaerung_interactive_v1.2.pdf">Beitrittserklärung (interaktives pdf)</a></li>
                    </ul>
                </div>
            </div>
            </div>     
        );
    }
}

export default Downloads;