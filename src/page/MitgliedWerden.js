import React, { Component } from 'react';
import ReactPiwik from 'react-piwik';

import { Link } from "react-router-dom";

class MitgliedWerden extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    //https://easyverein.com/public/vspaceone/applicationform/9916

    render() {
        return (
            <div className="container-fluid bg-3 label-warning" id="">
                <div className='no-side-padding' style={{overflow: 'hidden'}}>
                    <img className="img-fluid w-100 h-100" style={{width:'80vw','object-fit': 'cover',height: '10em'}} src="/pic/vspaceone_gemeinschaft.jpg"></img>
                    <div class="position-absolute w-100 h-100 d-flex justify-content-center align-items-center" style={{top: 0, left: 0}}>
                        <h1 className="text-white text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,)', margin: 0,padding: '20px'}}> 
                            Werde ein Teil unserer Community!
                        </h1>
                    </div>
                </div>
                <div style={{marginBottom: '2rem'}} className="row">
                    <div className="col-sm-12">
                        
                    </div>
                </div>


                <div className="row">
                    <div style={{textAlign:'left'}} className='col-md-6'>

                        <h2 style={{textAlign:'left'}}>Online-Mitgliedsantrag</h2>

                        Nutze unseren Online-Mitgliedsantrag direkt hier: <br></br>
                            
                        <a href="https://easyverein.com/public/vspaceone/applicationform/9916" target='blank'>Online-Mitgliedsantrag</a>

                    </div>
                    
                    <div style={{textAlign:'left'}} className="col-md-6">
                    <h2 style={{textAlign:'left'}}>Old-School auf Papier</h2>

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