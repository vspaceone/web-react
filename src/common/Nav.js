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
                            <li><a href="/#Events">Events</a></li>
                        </ul>
                    </li>

                    <li><Link to="/faq">F&amp;A</Link></li>
                    <li><Link to="/mitgliedwerden">Mitglied werden</Link></li>
                    
                    <li><a href="https://wiki.vspace.one">Wiki</a></li>
                    <li>
                      <Link className="faw-link" to="https://t.me/joinchat/DmNdswpnKgox_zzqENYXiA">
                        <i className="fab fa-telegram"></i>
                      </Link>
                    </li>                
                    <li>
                      <Link className="faw-link" to="https://join.slack.com/t/vspaceone/shared_invite/enQtNDgzOTU2ODI4MTE4LTc1NTI5YjZjYjA0ZDU5N2UxOThiZTljYmY1ZGY1ZmRlMDM0MmYyMGNlZDA1NDk2YTAxODMxYWEzOWM5NWU5OGE">
                        <i className="fab fa-slack"></i>
                      </Link>
                    </li>
                    <li>
                        <NavState />
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

    const open = true;
    var classes = "label doorstatelabel "
    var stateText = "Loading"

    if (open){
        classes += "label-success"
        stateText = "open"
    } else {
        classes += "label-error"
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
