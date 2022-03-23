import React, { Component } from 'react';
import { Img } from 'react-image';
import ReactPiwik from 'react-piwik';

class Freunde extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    render() {

        let netcupLinkParams = {
            href: "https://www.netcup.de/",
            target: "_blank",
            rel: "noopener noreferrer"
        } 

        let vowLogo = <a {...netcupLinkParams}><Img style={{maxWidth:"100%"}}  src="/pic/logos/logo_VOW_klein.gif" alt="Netcup Logo"></Img></a>
        let vowText = <p><a {...netcupLinkParams}></a>Wir sind Mitglied im Verband Offener Werkstätten und beziehen dort auch unsere Versicherungen</p>

        let darcLogo = <a {...netcupLinkParams}><Img style={{maxWidth:"100%"}}  src="/pic/logos/logo_darc.png" alt="Netcup Logo"></Img></a>
        let darcText = <p><a {...netcupLinkParams}></a>Ortsverbände A14 und A18 des Deutschen Amateur Radio Clubs sind räumlich und ideell in unserer unmittelbaren Nähe</p>

        let freifunkLogo = <Img style={{maxWidth:"100%"}} src="/pic/logos/logo_freifunk.png"></Img>
        let freifunkText = <p>Wir bieten ein Freifunk WLAN in unseren Räumen</p>

        let lugLogo = <Img style={{maxWidth:"100%"}} src="/pic/logos/logo_lug-vs.png"></Img>
        let lugText = <p>Mit der Linux User Group sind wir regelmäßig in Kontakt und hatten auch schon einen gemeinsamen Linux-Day</p>

        let immvestLogo = <Img style={{maxWidth:"100%"}} src="/pic/logos/logo-immvest.jpg"></Img>
        let immvestText = <p>Die Immvest GmbH als Eigentümerin des Technologiepark VS unterstützt uns mit tollen Räumlichkeiten</p>

        return (
            <div className="container-fluid bg-3 text-center label-warning" id="getamember">
                <div style={{marginBottom: '10rem'}} className="row">
                    <div className="col-sm-offset-2 col-sm-8">
                        <h1>Freunde, Partner und Kooperationen</h1>
                    </div>
                </div>
                <Freund num={0} logo={vowLogo} text={vowText} />
                <div style={{marginBottom: '20rem'}}></div>
                <Freund num={1} logo={darcLogo} text={darcText} />
                <div style={{marginBottom: '20rem'}}></div>
                <Freund num={2} logo={freifunkLogo} text={freifunkText} />
                <div style={{marginBottom: '20rem'}}></div>
                <Freund num={3} logo={lugLogo} text={lugText} />
                <div style={{marginBottom: '20rem'}}></div>
                <Freund num={4} logo={immvestLogo} text={immvestText} />
            </div>     
        );
    }
}

export default Freunde;

class Freund extends Component {

    constructor(props){
        super(props)
    }

    render() {

        let key = this.props.num
        let logoFirst = (key%2 === 0)
        let logo = this.props.logo
        let text = this.props.text
        
        let itemStyle = {textAlign:'center'}

        let bigView = (
            <div style={{display:'flex', alignItems:'center'}} className="row hidden-xs hidden-sm">
                <div {...itemStyle} className="col-xs-offset-0 col-xs-8">
                    {logoFirst ? logo : text}
                </div>
                <div {...itemStyle} className="col-xs-offset-0 col-xs-4">
                    {logoFirst ? text : logo}
                </div>
            </div>
        )

        let smallView = (
            <div className="row visible-xs visible-sm">
                <div {...itemStyle} className="col-xs-offset-0 col-xs-12">
                    {logo}
                </div>
                <div {...itemStyle} className="col-xs-offset-0 col-xs-12">
                    {text}
                </div>
            </div>  
        )

        return (
            <div style={{marginBottom: '10rem'}}>
                {bigView}
                {smallView}
            </div>
        );
    }
}
