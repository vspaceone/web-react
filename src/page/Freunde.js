import React, { Component } from 'react';
import { Img } from 'react-image';
import ReactPiwik from 'react-piwik';

class Freunde extends Component {

    componentDidMount(){
        document.title = "Freunde und Partner – vspace.one"
        ReactPiwik.push(['trackPageView'])
    }

    render() {

        let netcupLinkParams = {
            href: "https://www.netcup.de/",
            target: "_blank",
            rel: "noopener noreferrer"
        }

        let vowLogo = <a {...netcupLinkParams}><Img style={{maxWidth:"100%"}}  src="/pic/logos/logo_VOW_klein.gif" alt="Netcup Logo"></Img></a>
        let vowText = <p><a {...netcupLinkParams}>Verband Offener Werkstätten</a> – Wir sind Mitglied im Verband Offener Werkstätten und beziehen dort auch unsere Versicherungen.</p>

        let freifunkLogo = <Img style={{maxWidth:"100%"}} src="/pic/logos/logo_freifunk.png"></Img>
        let freifunkText = <p>In unseren Räumen steht ein Freifunk-WLAN zur Verfügung.</p>

        let lugLogo = <Img style={{maxWidth:"100%"}} src="/pic/logos/logo_lug-vs.png"></Img>
        let lugText = <p>Mit der Linux User Group sind wir regelmäßig in Kontakt – gemeinsame Events wie der Linux-Day oder Installationsparties gehören dazu.</p>

        return (
            <div className="container-fluid bg-2 text-center" id="getamember">
                <div style={{marginBottom: '3rem'}} className="row">
                    <div className="col-sm-offset-2 col-sm-8">
                        <h1>Freunde, Partner und Kooperationen</h1>
                    </div>
                </div>
                <Freund num={0} logo={vowLogo} text={vowText} />
                <div style={{marginBottom: '3rem'}}></div>
                <Freund num={1} logo={lugLogo} text={lugText} />
                <div style={{marginBottom: '3rem'}}></div>
                <Freund num={2} logo={freifunkLogo} text={freifunkText} />
            </div>
        );
    }
}

export default Freunde;

class Freund extends Component {

    render() {

        let key = this.props.num
        let logoFirst = (key%2 === 0)
        let logo = this.props.logo
        let text = this.props.text

        let itemStyle = {textAlign:'center'}

        return (
            <div className="partner-card" style={{marginBottom: '2rem'}}>
                <div style={{display:'flex', alignItems:'center'}} className="row hidden-xs hidden-sm">
                    <div {...itemStyle} className="col-xs-offset-0 col-xs-8">
                        {logoFirst ? logo : text}
                    </div>
                    <div {...itemStyle} className="col-xs-offset-0 col-xs-4">
                        {logoFirst ? text : logo}
                    </div>
                </div>
                <div className="row visible-xs visible-sm">
                    <div {...itemStyle} className="col-xs-offset-0 col-xs-12">
                        {logo}
                    </div>
                    <div {...itemStyle} className="col-xs-offset-0 col-xs-12">
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}
