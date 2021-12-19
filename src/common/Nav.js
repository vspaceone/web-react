import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
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
                    <li>
                      <a className="faw-link" href="https://t.me/joinchat/DmNdswpnKgox_zzqENYXiA" target="_blank">
                        <i className="fab fa-telegram"></i>
                      </a>
                    </li>
                    <li>
                      <a className="faw-link" href="https://github.com/vspaceone" target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a className="faw-link" href="https://twitter.com/vspaceone" target="_blank">
                        <i className="fab fa-twitter"></i>
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
