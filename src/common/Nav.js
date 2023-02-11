import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand" >vspace.one</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home<span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="/#Mitmachen">Mitmachen</a></li>
                            <li><a href="/#Ausstattung">Ausstattung</a></li>
                            <li><a href="/#Ort">Ort</a></li>
                        </ul>
                    </li>

                    <li><a href="/#Events">Termine</a></li>
                    <li><Link to="/faq">F&amp;A</Link></li>
                    

                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Unterstützen<span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><Link to="/mitgliedwerden">Mitglied werden</Link></li>
                            <li><Link to="/spenden">Spenden</Link></li>
                            <li><Link to="/sponsoren">Sponsoren</Link></li>
                        </ul>
                    </li>

                    <li><a href="https://wiki.vspace.one">Wiki</a></li>

                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Social<span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="https://twitter.com/vspaceone" target="_blank"><i className="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="https://www.facebook.com/vspace.one" target="_blank"><i className="fab fa-facebook"></i> Facebook</a></li>
                        <li><a href="https://www.instagram.com/vspace.one/" target="_blank"><i className="fab fa-instagram"></i> Instagram</a></li>
                        <li><a href="https://toot.kif.rocks/@vspaceone" target="_blank"><i className="fab fa-mastodon"></i> Mastodon</a></li>
                        <li className="divider"></li>
                        <li><a href="/freunde" target="_blank"><i className="fab fa-users"></i>Freunde, Partner, Kooperationen</a></li>
                      </ul>
                    </li>

                    <li>
                      <a className="faw-link" href="https://t.me/joinchat/DmNdswpnKgox_zzqENYXiA" target="_blank">
                        <i className="fab fa-telegram"></i>
                      </a>
                    </li>
                    <li>
                      <a className="faw-link" href="https://matrix.to/#/#vspaceone-general:matrix.org" target="_blank">
                        <img className="fab" src="/pic/logos/Matrix.svg" style={{lineHeight:1, width: "30px", height: "30px"}}></img>
                      </a>
                    </li>
                    <li>
                      <a className="faw-link" href="https://github.com/vspaceone" target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                        <NavState state={ this.props.state } />
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}

class NavState extends Component {
  render(){

    //const open = true;
    var classes = "label doorstatelabel "
    var stateText = "Loading"

    if (this.props.state === undefined){
        classes += "label-warning"
        stateText = "defect"
    } else if (this.props.state.open){
        classes += "label-success"
        stateText = "open"
    } else {
        classes += "label-danger"
        stateText = "closed"
    }

    return(
        <div id="doorstate" className={classes}>
            <a href="#state" id="doorstateString">{stateText}</a>
        </div>
    );
  }
}

export default Nav;
