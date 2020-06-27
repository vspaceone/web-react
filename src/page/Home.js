import React, { Component } from 'react';
import ReactPiwik from 'react-piwik';

import {Marker, Popup, Map, TileLayer} from 'react-leaflet';

import HomeJumbo from './Home/HomeJumbo.js'
import HomeEvents from './Home/HomeEvents.js';

class Home extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div>
                <HomeJumbo/>
                <HomeInfoBox1/>
                <HomeInfoBox2/>
                <HomeInfoBox3/>
                <HomeEvents />
                <HomeState state={ this.props.spaceapi.state } />
                <HomePosition 
                    location={ this.props.spaceapi.location } 
                    contact={ this.props.spaceapi.contact }    
                />
            </div>
        
        );
    }
}

function HomeInfoBox1() {
    return (
        <div className="container-fluid bg-3 text-left">
            <h2 className="margin">Was wir machen</h2>
            <p>
                Unser Ziel ist der Wissensaustausch sowie die Bildung aller interessierten
                in den Bereichen neuartiger computergestützter Technologien (wie zum Beispiel aber nicht ausschließlich
                3D-­Druck, CNC, Internet der Dinge und Robotik), der Elektrotechnik und Elektronik
                sowie auf dem Gebiet der Reparatur und Wartung.
                Natürlich aber auch ganz im Sinne aller anderen Hacker- und Makerspaces das bieten einer Plattform,
                um seinen Interessen in diesen Gebieten nachzugehen.
            </p>
            <br/><br/>
            <p className="text-center"><a href="?page=faq">Mehr Fragen zu uns und was wir machen beantworten wir hier!</a></p>
        </div>
    );
}

function HomeInfoBox2() {
    return (
        <div className="container-fluid bg-2 text-center no-side-padding" id="Mitmachen">
            <h2 className="margin">Mitmachen</h2>

            <div style={{marginRight: '10px', marginLeft: '10px'}}>
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Vorbeischauen</h3>
                        <p>Du möchtest uns und unsere Räumlichkeiten gerne persönlich kennenlernen? Schau doch Dienstags ab 19:00 bei uns in der Wilhelm-Binderstraße 19 in Villingen vorbei. Dienstags findet bei uns jede Woche der Chaostreff statt.</p>
                    </div>
                    <div className="col-sm-6">
                        <h3>Mitglied werden</h3>
                        <p>Bei uns kann Jeder und Jede mitmachen. Interessierte Schüler, Studenten und Erwachsene, die sich für kreativen Umgang mit Technik begeistern sind willkommen. Wenn euch gefällt was wir tun und ihr uns unterstützen wollt findet ihr unser Beitrittsformular <a href="https://vspace.one/?page=mitgliedwerden">hier</a>.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Telegram</h3>
                        <p>Für die inoffizielle Kommunikation verwenden wir eine <a href="https://t.me/joinchat/DmNdswpnKgox_zzqENYXiA">Telegramgruppe</a>. Telegram ist eine Nachrichtenapp, ähnlich WhatsApp. Wenn du dich interessierst und wissen willst, was bei uns los ist, trete ihr bei oder schreibe uns eine Email an info[at]vspace.one.</p>
                    </div>
                    <div className="col-sm-6">
                        <h3>Mailingliste</h3>
                        <p>Die 'offizielle' Kommunikation, wie Einladungen zu Veranstaltungen, läuft über unsere <a href="https://lists.vspace.one/postorius/lists/public.lists.vspace.one/">Mailingliste</a>. Trag dich ein und bleib up-to-date. Das ist die Wahl, falls du nur auf dem Laufenden bleiben willst. (ca. 1 Mail pro Monat)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HomeInfoBox3() {
    return (
        <div className="container-fluid no-side-padding bg-3 text-center" id="Ausstattung">
            <h2 className="margin">Ausstattung</h2><br/>
            <div className="row">
                <div className="col-sm-4">
                    <p>Für unsere Verbindung und Vernetzung in aller Welt sorgt ein Router mit Internetzugang. Für Gäste betreiben wir einen <a href="https://freifunk.net/">Freifunk Zugangspunkt</a>.</p>
                </div>
                <div className="col-sm-4">
                <p>Für die Umsetzung cooler Projekte haben wir eine Vielzahl an Werkzeugen und Maschinen (z.B. einen 3D-Drucker). Eine aktuelle Liste gibt es im <a href="https://wiki.vspace.one">Wiki</a>.</p>
                </div>
                <div className="col-sm-4">
                <p>Wir haben zwei moderne Räume. In der Brücke stehen bequeme Sofas, ein Beamer und ein Kühlschrank. Im Maschinenraum, kann an Projekten gearbeitet werden.</p>
                </div>
                <div className="row">
                <div className="col-sm-4">
                    <img src="pic/vspaceone_ausstattung_1.jpg" className="img-responsive margin" style={{width: '100%'}} alt="Maschinenraum"/>
                </div>
                <div className="col-sm-4">
                    <img src="pic/vspaceone_ausstattung_2.jpg" className="img-responsive margin" style={{width: '100%'}} alt="vspace.one Logo"/>
                </div>
                <div className="col-sm-4">
                    <img src="pic/vspaceone_ausstattung_3.jpg" className="img-responsive margin" style={{width: '100%'}} alt="Brücke"/>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-4">
                    <img src="pic/vspaceone_ausstattung_4.jpg" className="img-responsive margin" style={{width: '100%'}} alt="Make things awesome Logo"/>
                </div>
                <div className="col-sm-4">
                    <img src="pic/vspaceone_arbeitsplatz3.jpg" className="img-responsive margin" style={{width: '100%'}} alt="Arbeitsplatz"/>
                </div>
                <div className="col-sm-4">
                    <img src="pic/vspaceone_elektronik.jpg" className="img-responsive margin" style={{width: '100%'}} alt="Lager und Projektboxen"/>
                </div>
                </div>
            </div>
        </div>
    );
}

class HomeState extends Component{ //style="margin-top:2px"

    render(){
        var classes = "container-fluid text-center "
        var text = ""
       
        if (this.props.state && this.props.state.open){
            classes += " label-success"
            text = "Open"
        } else if (this.props.state && !this.props.state.open) {
            classes += " label-danger"
            text = "Closed"
        } else {
            classes += " label-warning"
            text = "Defekt"
        }

        return (
            <div className={ classes } id="state">
                <h2 >Raumstatus</h2>
                <br/>
                <h3  id="stateText">{ text }</h3>
            </div>
        );
    }    
}

class HomePosition extends React.Component {
    render (){

        const pos = this.props.location ? [this.props.location.lat, this.props.location.lon] : [0,0]
        const address = this.props.location ? this.props.location.address : ""
        const phone = this.props.contact ? this.props.contact.phone : ""


        const mapConfig = {
            center: pos,
            zoom: 13
        };

        const marker = (
            <Marker position={pos} >
                <Popup>
                    <span>vspace.one e.V.</span>
                </Popup>
            </Marker>
        );

        return (
            <div className="container-fluid bg-2 text-center" id="Ort">
                <h2 className="margin">Wo findest du uns?</h2>
                <p>Du findest uns in der Doppelstadt Villingen-Schwenningen.</p>
                <p>Unsere Adresse lautet:<br/> { address  }</p><br/>
                <p></p>                
                
                <Map center={mapConfig.center} zoom={mapConfig.zoom} style={{
                    width: '100%',
                    height: '30vh'
                }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                    {marker}
                </Map>
                <small>
                <a href="http://www.openstreetmap.org/?mlat=48.06501&amp;mlon=8.45645#map=18/48.06502/8.45645"><i>Große Karte anzeigen</i></a>
                </small>


                <p>Wenn der vspace.one offen ist kannst du uns auch anrufen.</p>
                <p>Telefon: <a href={"tel:" + phone} style={{color: '#dddddd'}}>{phone}</a></p>
            </div>
        );       

    }
}

export default Home;
