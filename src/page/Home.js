import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactPiwik from 'react-piwik';

import {Marker, Popup, Map, TileLayer} from 'react-leaflet';

import HomeJumbo from './Home/HomeJumbo.js'
import HomeEvents from './Home/HomeEvents.js';

import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Home extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div>
                <HomeJumbo/>
                <HomeInfoBox1/>
                <HomeInfoBoxBanner/>
                <HomeInfoBoxMitmachen/>
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
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="margin">Was wir machen</h2>
                    <div className="section-divider"></div>
                    <p>
                        Wir tauschen Wissen aus und lernen voneinander – in Bereichen wie 3D-Druck, CNC, Internet der Dinge, Robotik, Elektrotechnik, Elektronik sowie Reparatur und Wartung.
                        <br></br><br></br>
                        Wie in jedem guten Hacker- und Makerspace bieten wir eine Plattform, um seinen Interessen nachzugehen – von Programmieren über Elektronik bis Holz- und Metallwerken ist alles dabei.
                        <br></br><br></br>
                        Dazu haben wir eine stetig wachsende offene Werkstatt, die für jeden zugänglich ist!
                    </p>
                    <br/><br/>
                    <p className="text-center"><Link to="/faq">Noch Fragen? Hier gibt's Antworten!</Link></p>
                </div>
            </div>
        </div>
    );
}

function HomeInfoBoxMitmachen() {
    return (
        <div className="container-fluid bg-3 text-center no-side-padding" id="Mitmachen">
            <h2 className="margin">Mitmachen</h2>
            <div className="section-divider"></div>

            <div style={{marginRight: '10px', marginLeft: '10px'}}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="mitmachen-card">
                            <h3>Vorbeischauen</h3>
                            <p>Lust, uns kennenzulernen? Schau einfach dienstags ab 18:00 Uhr bei uns am Krebsgraben 15 in Villingen vorbei – da findet unser wöchentliches Treffen statt.</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mitmachen-card">
                            <h3>Mitglied werden</h3>
                            <p>Bei uns kann jeder mitmachen – egal ob Schüler, Studenten oder Berufstätige. Wer sich für Technik begeistert, ist willkommen. Wenn euch gefällt, was wir tun, findet ihr unser Beitrittsformular <Link to="/mitgliedwerden">hier</Link>.</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mitmachen-card">
                            <h3>Community-Chat</h3>
                            <p>Wir kommunizieren über unsere <a href="https://t.me/joinchat/DmNdswpnKgox_zzqENYXiA">Telegram-Gruppe</a> und unseren <a href="https://matrix.to/#/#vspaceone-general:matrix.org">Matrix-Raum</a>. Beide Chats sind miteinander verbunden – nutze einfach, was dir lieber ist! Tritt gerne bei oder schreib uns eine E-Mail an info[at]vspace.one.</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mitmachen-card">
                            <h3>Spenden</h3>
                            <p>Dir gefällt, was wir machen, aber eine Mitgliedschaft passt gerade nicht? Kein Problem – wir freuen uns auch über Spenden! Mehr dazu <Link to="/spenden">hier</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


class HomeInfoBoxBanner extends Component {

    constructor(props){
        super(props);
        this.state = {value: 0}
        this.onChange = this.onChange.bind(this);
    }

    onChange(value){
        this.setState({ value });
    }

    render(){

        const slideContent = [
            {
                title: "Gemeinsam zum Ziel",
                text: "Sich gegenseitig motivieren, inspirieren, helfen und voneinander lernen – manches macht gemeinsam einfach mehr Spaß!",
                imageSrc: "pic/vspaceone_gemeinschaft.jpg"
            },
            {
                title: "3D-Druck",
                text: "Mit Druckern von Bambu, Prusa, Voron und weiteren erzielst du nach kurzer Einweisung schnell Ergebnisse, die sich sehen lassen können.",
                imageSrc: "pic/replikatorraum-drucker.jpg"
            },
            {
                title: "Elektronik",
                text: "Der Elektronikarbeitsplatz im Labor lädt zum Hacken ein: Lötkolben, Heißluftstation, Multimeter, Labornetzteile, digitales Oszilloskop und jede Menge Zubehör.",
                imageSrc: "pic/vspaceone_big_psu_small.jpg"
            },
            {
                title: "Reparatur",
                text: "Eine ganze Wand voll sortierter Elektronikkomponenten – von Widerständen bis Kondensatoren ist alles griffbereit.",
                imageSrc: "pic/laborneu.jpg"
            },
            {
                title: "Holz und Metall",
                text: "Unsere stetig wachsende Ausstattung an Werkzeugen und Maschinen steht jederzeit für große und kleine Projekte bereit.",
                imageSrc: "pic/maschinenraumneu.jpg"
            },
            {
                title: "Vier Räume, viele Möglichkeiten",
                text: "Die Brücke mit Sofas und Beamer, der Maschinenraum für größere Projekte, das Labor mit Elektronikarbeitsplatz und der Replikatorraum mit 3D-Druckern und gemütlichen Plätzen.",
                imageSrc: "pic/replikatorraum.jpg"
            }
        ]

        const topContainerStyle = {
            marginTop: "0px",
            //marginBottom: "-80px",
            paddingTop: "40px",
            maxHeight: "100vh",
            minHeight: "70vh",
            zIndex: "-4",
            overflow: "hidden"
        }

        return (
            <div className="container-fluid no-side-padding bg-2 text-center" style={topContainerStyle} id="Ausstattung">
                <div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        totalSlides={slideContent.length}
                        interval={10000}
                        isPlaying={true}
                        infinite={true}
                    >
                        <DotGroup />
                        <Slider style={{minHeight: "70vh", maxHeight: "100vh"}}>
                            <>
                                {slideContent.map((content, idx) => (
                                    <Slide key={idx} index={idx}>
                                        <HomeInfoBoxBannerSlide
                                            title={content.title}
                                            text={content.text}
                                            imageSrc={content.imageSrc}
                                        />
                                    </Slide>
                                ))}
                            </>
                        </Slider>
                    </CarouselProvider>
                </div>
            </div>
        );
    }

}

function HomeInfoBoxBannerSlide(props) {

    const rowTextClasses = "col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2"

    const textOverlayStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.55)",
        borderRadius: "8px",
        padding: "16px 24px",
        display: "inline-block"
    }

    return (
        <>
            <div className="row">
                <div className={rowTextClasses}>
                    <div style={textOverlayStyle}>
                        <h3>{props.title}</h3>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>

            <div style={{zIndex: "1", overflow: "hidden", backgroundSize: "cover", objectFit: "contain", backgroundPosition: "center", backgroundImage: `url(${props.imageSrc})`, height: "100%", maxHeight: "100vh"}}></div>
        </>
    )
}

class HomeState extends Component{ //style="margin-top:2px"

    render(){
        var classes = "container-fluid text-center"
        var text = ""
        var badgeStyle = {}

        if (this.props.state && this.props.state.open){
            classes += " label-success"
            text = "Open"
            badgeStyle = {
                display: "inline-block",
                padding: "6px 20px",
                borderRadius: "20px",
                backgroundColor: "rgba(10,194,108,0.2)",
                border: "1px solid rgba(10,194,108,0.6)",
                fontWeight: "600"
            }
        } else if (this.props.state && !this.props.state.open) {
            classes += " label-danger"
            text = "Closed"
            badgeStyle = {
                display: "inline-block",
                padding: "6px 20px",
                borderRadius: "20px",
                backgroundColor: "rgba(220,53,69,0.2)",
                border: "1px solid rgba(220,53,69,0.6)",
                fontWeight: "600"
            }
        } else {
            classes += " label-warning"
            text = "Defekt"
            badgeStyle = {
                display: "inline-block",
                padding: "6px 20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,193,7,0.2)",
                border: "1px solid rgba(255,193,7,0.6)",
                fontWeight: "600"
            }
        }

        return (
            <div className={ classes } id="state">
                <h2>Raumstatus</h2>
                <br/>
                <h3 id="stateText"><span style={badgeStyle}>{ text }</span></h3>
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

        const mapLink = "http://www.openstreetmap.org/?mlat=" + pos[0] + "&amp;mlon=" + pos[1] + "#map=18/" + pos[0] + "/" + pos[1];

        const mapContainerStyle = {
            width: '100%',
            height: '30vh',
            borderRadius: '8px',
            overflow: 'hidden'
        };

        return (
            <div className="container-fluid bg-2 text-center" id="Ort">
                <h2 className="margin">Wo findest du uns?</h2>
                <div className="section-divider"></div>

                <p>Wir sind in der Doppelstadt Villingen-Schwenningen zu Hause.</p>
                <p>Adresse: <br/> { address  }</p><br/>
                <p>What3Words: <a href = "https://w3w.co/rotes.hörer.dorfplatz">{"///rotes.hörer.dorfplatz"}</a></p><br/>

                <p>Wenn wir offen haben, erreichst du uns auch telefonisch:</p>
                <p>Telefon: <a href={"tel:" + phone} style={{color: '#dddddd'}}>{phone}</a></p>

                <Map center={mapConfig.center} zoom={mapConfig.zoom} style={mapContainerStyle}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                    {marker}
                </Map>
                <small>
                <a href={mapLink}><i>Große Karte anzeigen</i></a>
                </small>
            </div>
        );

    }
}

export default Home;
