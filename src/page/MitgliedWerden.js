import React, { Component } from 'react';
import ReactPiwik from 'react-piwik';

import { Link } from "react-router-dom";

class MitgliedWerden extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div className="container-fluid bg-2 text-center label-warning" id="getamember">
                <h1 style={{marginBottom: '10px'}}>Mitglied werden</h1>
                <div className="row">
                    <div style={{textAlign:'left'}} className="col-sm-offset-2 col-sm-8">
                        Lade dir unter <Link to="/downloads" >Downloads</Link> die Beitrittserklärung herunter, bring sie mit in den Space und drücke sie einem der Vorstände in die Hände. Dafür eignet sich beispielsweise das zweiwöchig stattfindende Plenum
                        am Dienstagabend. Alternativ schicke sie an folgende Adresse:<br/><br/> vspace.one e.V <br/> Wilhelm-Binder-Str. 19 <br/> 78048 Villingen
                    </div>
                </div>
            </div>     
        );
    }
}

export default MitgliedWerden;