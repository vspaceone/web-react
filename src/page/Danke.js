import React, { Component } from 'react';
import { Img } from 'react-image';
import ReactPiwik from 'react-piwik';

class Danke extends Component {

    componentDidMount() {
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div className="container-fluid bg-3 text-center label-warning" id="getamember">
                <div style={{ marginBottom: '2rem' }} className="row">
                    <div className="col-sm-12">
                        <h1>Vielen Danke für deine Spende!</h1>
                    </div>
                </div>
                <img 
                    src="pic/logo_vspaceone.svg" 
                    className="img-responsive img-circle margin" 
                    alt="Bird" width="500" height="500"
                    style={{
                        verticalAlign: 'middle',
                        display: 'inline'
                    }}/>
                <div style={{ marginBottom: '2rem' }} className="row">
                    <div style={{ textAlign: 'center' }} className="col-sm-12">
                        <p>Falls du wissen willst was mit dem von dir gespendeten Geld passiert, Folge uns auf Social Media.</p>
                        <br />
                        <div className="parent">
                            <div className="child inline-block-child">
                                <a href="https://twitter.com/vspaceone" target="_blank"><i className="fab fa-twitter"></i> Twitter</a>
                            </div>
                            <div className="child inline-block-child">
                                <a href="https://www.facebook.com/vspace.one" target="_blank"><i className="fab fa-facebook"></i> Facebook</a>
                            </div>
                            <div className="child inline-block-child">
                                <a href="https://www.instagram.com/vspace.one/" target="_blank"><i className="fab fa-instagram"></i> Instagram</a>
                            </div>
                            <div className="child inline-block-child">
                                <a href="https://toot.kif.rocks/@vspaceone" target="_blank"><i className="fab fa-mastodon"></i> Mastodon</a>
                            </div>
                        </div>
                        <a href="/">Zurück zur Startseite</a> 
                    </div>
                </div>
            </div>
        )
    }

}

export default Danke;