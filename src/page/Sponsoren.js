import React, { Component } from 'react';
import { Img } from 'react-image';
import ReactPiwik from 'react-piwik';

class Sponsoren extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    render() {

        let netcupLinkParams = {
            href: "https://www.netcup.de/",
            target: "_blank",
            rel: "noopener noreferrer"
        } 

        let netcupLogo = <a {...netcupLinkParams}><Img src="/pic/sponsors/netcup_logo_RGB_color.svg"></Img></a>
        let netcupText = <p><a {...netcupLinkParams}>netcup.de – Ihr Ansprechpartner für qualitatives Webhosting, Servermanagement, Colocation</a> und weitere Internetdienstleistungen für einen erfolgreichen, zuverlässigen und sicheren Internetauftritt.</p>

        let infoLogo = <Img style={{width:"100%"}} src="/pic/sponsors/undraw_businessman_re_mlee.svg"></Img>
        let infoText = <p>Interesse an einer Kooperation?<br></br>Dann kontaktiere uns über vorstand [at] vspace.one</p>

        return (
            <div className="container-fluid bg-3 text-center label-warning" id="getamember">
                <div style={{marginBottom: '10rem'}} className="row">
                    <div className="col-sm-offset-2 col-sm-8">
                        <h1>Unsere Sponsoren</h1>
                    </div>
                </div>
                <Sponsor num={0} logo={netcupLogo} text={netcupText} />
                <div style={{marginBottom: '20rem'}}></div>
                <Sponsor num={1} logo={infoLogo} text={infoText} />
            </div>     
        );
    }
}

export default Sponsoren;

class Sponsor extends Component {

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
