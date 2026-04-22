import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {

    constructor(props){
        super(props)

        this.state = {
            version: ""
        } 
    }

    getInitialState() {
        return {
            version: ""
        }
    }

    componentDidMount() {
        fetch('/version.txt')
            .then(response => response.text())
            .then(text => {
                this.setState({
                    version: text
                })    
            })
    }

    render(){
        return(
            <footer className="container-fluid bg-4 text-center">
                <p style={textStyleOrg}>vspace.one e.V.</p>
                <div style={linkContainerStyle}>
                    <Link to="/impressum" style={linkStyle}>Impressum</Link>
                    <Link to="/datenschutz" style={linkStyle}>Datenschutzerklärung</Link>
                    <Link to="/downloads" style={linkStyle}>Downloads</Link>
                    <Link to="/mitgliedwerden" style={linkStyle}>Werde Mitglied!</Link>
                </div>
                <p style={textStyleVersion}>{this.state.version}</p>
            </footer>
        );
    }
}

var textStyleOrg = {
    fontWeight: "bold",
    marginBottom: "0.5rem"
}

var linkContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1rem",
    marginBottom: "0.75rem"
}

var linkStyle = {
    display: "inline-block"
}

var textStyleVersion = {
    color: "dimgrey"
}

export default Footer;