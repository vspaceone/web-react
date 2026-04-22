import React, { Component } from 'react';
import ReactPiwik from 'react-piwik';

import { Link } from "react-router-dom";

class MitgliedWerden extends Component {

    componentDidMount(){
        document.title = "Mitglied werden – vspace.one"
        ReactPiwik.push(['trackPageView'])
    }

    //https://easyverein.com/public/vspaceone/applicationform/9916

    render() {
        return (
            <div className="container-fluid bg-2" id="" style={{paddingTop: 0}}>
                <div className='no-side-padding' style={{overflow: 'hidden', position: 'relative'}}>
                    <img className="img-fluid w-100" style={{width:'100%', objectFit: 'cover', height: '16em'}} src="/pic/vspaceone_gemeinschaft.jpg" alt=""></img>
                    <div className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center" style={{top: 0, left: 0, background: 'rgba(0,0,0,0.4)'}}>
                        <h1 className="text-white text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)', margin: 0, padding: '20px'}}>
                            Werde ein Teil unserer Community!
                        </h1>
                    </div>
                </div>
                <div style={{marginTop: '2rem'}} className="row">
                    <div style={{textAlign:'left'}} className='col-md-6'>
                        <div className="modern-card">
                            <h2 style={{textAlign:'left'}}>Online-Mitgliedsantrag</h2>

                            <p>Am schnellsten geht es online – füll einfach unser Formular aus:</p>

                            <a className="btn-modern" href="https://easyverein.com/public/vspaceone/applicationform/9916" target='blank'>Zum Mitgliedsantrag</a>
                        </div>
                    </div>

                    <div style={{textAlign:'left'}} className="col-md-6">
                        <div className="modern-card">
                            <h2 style={{textAlign:'left'}}>Klassisch auf Papier</h2>

                            <p>Lade die Beitrittserklärung unter <Link to="/downloads">Downloads</Link> herunter und gib sie einem Vorstand in die Hand – zum Beispiel beim Chaostreff am Dienstagabend.</p>
                            <p>
                            Per Post: <br/> vspace.one e.V. <br/> Am Krebsgraben 15 <br/> 78048 Villingen
                            </p>
                            <p>
                            Per E-Mail: <a href="mailto:vorstand@vspace.one">vorstand [at] vspace.one</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MitgliedWerden;
