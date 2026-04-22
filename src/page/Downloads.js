import React, { Component } from 'react';
import ReactPiwik from 'react-piwik';

class Downloads extends Component {

    componentDidMount(){
        document.title = "Downloads – vspace.one"
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div className="container-fluid bg-2 text-center" id="downloads">
                <div style={{marginBottom: '2rem'}} className="row">
                    <div className="col-sm-12">
                        <h1>Downloads</h1>
                        <hr className="section-divider" />
                    </div>
                </div>
                <div className="row">
                    <div style={{textAlign:'center'}} className="col-sm-12">
                        <a className="download-item" href="download/satzung_2022.pdf">Satzung</a>
                        <a className="download-item" href="download/beitragsordnung_v1.2.pdf">Beitragsordnung</a>
                        <a className="download-item" href="download/beitrittserklaerung_v1.3.pdf">Beitrittserklärung</a>
                        <a className="download-item" href="download/beitrittserklaerung_interactive_v1.3.pdf">Beitrittserklärung (interaktives pdf)</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Downloads;
