import React, { Component } from 'react';
import ReactPiwik from 'react-piwik';

import { Link } from "react-router-dom";

class MitgliedWerden extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div className="container-fluid bg-3 text-center label-warning" id="getamember">
                <div style={{marginBottom: '2rem'}} className="row">
                    <div className="col-sm-12">
                        <h1>Mitglied Werden</h1>
                    </div>
                </div>
                <div className="row">
                    <div style={{textAlign:'center'}} className="col-sm-offset-2 col-sm-8">
                        Lade dir unter <Link to="/downloads" >Downloads</Link> die Beitrittserklärung herunter, bring sie mit in den Space und drücke sie einem der Vorstände in die Hände. Dafür eignet sich beispielsweise das regelmäßig stattfindende Treffen
                        am Dienstagabend.
                        <br/><br/>
                        Alternativ schicke sie an folgende Adresse:<br/><br/> vspace.one e.V <br/> Am Krebsgraben 15 <br/> 78048 Villingen
                        <br/><br/>
                        Oder an folgende E-Mail Adresse:<br/><br/>
                        <a href="mailto:vorstand@vspace.one">vorstand [at] vspace.one</a>
                    </div>
                </div>
            </div>     
        );
    }
}

export default MitgliedWerden;