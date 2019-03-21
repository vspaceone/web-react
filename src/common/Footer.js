import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    render(){
        return(
            <footer className="container-fluid bg-4 text-center">
                <p><Link to="/impressum" >Impressum</Link> | <Link to="/datenschutzerklaerung" >Datenschutzerklärung</Link> | <Link to="/downloads" >Downloads</Link> | <Link to="/mitgliedwerden" >Werde Mitglied!</Link> </p>
            </footer>
        );
    }
}

export default Footer;