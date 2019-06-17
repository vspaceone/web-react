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
        fetch('/version')
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
                <p><Link to="/impressum" >Impressum</Link> | <Link to="/datenschutz" >Datenschutzerklärung</Link> | <Link to="/downloads" >Downloads</Link> | <Link to="/mitgliedwerden" >Werde Mitglied!</Link> </p>
                <br/>
                <p style={textStyleVersion}>{this.state.version}</p>
            </footer>
        );
    }
}

var textStyleVersion = {
    color: "dimgrey"
}

export default Footer;