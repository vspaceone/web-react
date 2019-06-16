import React, { Component } from 'react';
import ReactPiwik from 'react-piwik';

class Downloads extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div className="container-fluid bg-2 text-center label-warning" id="downloads">
            <h1 style={{marginBottom: '10px'}}>Downloads</h1>
            <div className="row">
                <div style={{textAlign:'left'}} className="col-sm-3"></div>
                <div style={{textAlign:'left'}} className="col-sm-6">
                <ul>
                    <li><a style={{color: '#ffffff'}} href="download/satzung_v1.1.pdf">Satzung</a></li>
                    <li><a style={{color: '#ffffff'}} href="download/beitragsordnung_v1.2.pdf">Beitragsordnung</a></li>
                    <li><a style={{color: '#ffffff'}} href="download/beitrittserklaerung_v1.2.pdf">Beitrittserklaerung</a></li>
                    <li><a style={{color: '#ffffff'}} href="download/beitrittserklaerung_interactive_v1.2.pdf">Beitrittserklaerung (interaktives pdf)</a></li>
                </ul>
                </div>
                <div style={{textAlign:'left'}} className="col-sm-3"></div>
            </div>
            </div>     
        );
    }
}

export default Downloads;