import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactPiwik from 'react-piwik';

import {Marker, Popup, Map, TileLayer} from 'react-leaflet';

import HomeJumbo from './Home/HomeJumbo.js'
import HomeEvents from './Home/HomeEvents.js';

import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Timeline } from 'react-twitter-widgets'

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
                <HomeInfoBoxFeed/>
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
                    <p>
                        Unser Ziel ist der Wissensaustausch sowie die Bildung aller interessierten
                        in den Bereichen neuartiger computergestützter Technologien (wie zum Beispiel aber nicht ausschließlich
                        3D-­Druck, CNC, Internet der Dinge und Robotik), der Elektrotechnik und Elektronik
                        sowie auch auf Gebieten der Reparatur und Wartung.
                        <br></br><br></br>
                        Natürlich aber auch ganz im Sinne aller anderen Hacker- und Makerspaces das bieten einer Plattform,
                        um seinen Interessen in diesen Gebieten nachzugehen von Programmieren bis Holz- und Metallwerken ist fast alles dabei. 
                        <br></br><br></br>
                        Dazu haben wir eine immer größer werdende offene Werkstatt, die für jeden zugänglich sein soll!
                    </p>
                    <br/><br/>
                    <p className="text-center"><Link to="/faq">Mehr Fragen zu uns und was wir machen beantworten wir hier!</Link></p>
                </div>                
            </div>
        </div>
    );
}

function HomeInfoBoxMitmachen() {
    return (
        <div className="container-fluid bg-3 text-center no-side-padding" id="Mitmachen">
            <h2 className="margin">Mitmachen</h2>

            <div style={{marginRight: '10px', marginLeft: '10px'}}>
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Vorbeischauen</h3>
                        <p>Du möchtest uns und unsere Räumlichkeiten gerne persönlich kennenlernen? Schau doch Dienstags ab 19:00 bei uns in der Wilhelm-Binderstraße 19 in Villingen vorbei. Dienstags findet bei uns jede Woche der Chaostreff statt.</p>
                    </div>
                    <div className="col-sm-6">
                        <h3>Mitglied werden</h3>
                        <p>Bei uns kann Jeder und Jede mitmachen. Interessierte Schüler, Studenten und Erwachsene, die sich für kreativen Umgang mit Technik begeistern sind willkommen. Wenn euch gefällt was wir tun und ihr uns unterstützen wollt findet ihr unser Beitrittsformular <Link to="/mitgliedwerden">hier</Link>.</p>
                    </div>
                    <div className="col-sm-6">
                        <h3>Telegram</h3>
                        <p>Für die inoffizielle Kommunikation verwenden wir eine <a href="https://t.me/joinchat/DmNdswpnKgox_zzqENYXiA">Telegramgruppe</a>. Telegram ist eine Nachrichtenapp, ähnlich WhatsApp. Wenn du dich interessierst und wissen willst, was bei uns los ist, trete ihr bei oder schreibe uns eine Email an info[at]vspace.one.</p>
                    </div>
                    <div className="col-sm-6">
                        <h3>Mailingliste</h3>
                        <p>Die 'offizielle' Kommunikation, wie Einladungen zu Veranstaltungen, läuft über unsere <a href="https://lists.vspace.one/postorius/lists/public.lists.vspace.one/">Mailingliste</a>. Trag dich ein und bleib up-to-date. Das ist die Wahl, falls du nur auf dem Laufenden bleiben willst. (ca. 1 Mail pro Monat)</p>
                    </div>
                    <div className="col-sm-6">
                        <h3>Spenden</h3>
                        <p>Dir gefällt was wir machen, hast aber keine Möglichkeit oder Lust Mitglied zu werden? Gerne nehmen wir wie <Link to="/mitgliedwerden">hier beschrieben</Link> deine Spende als Überweisung an.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HomeInfoBoxFeed() {
    return (
        <div className="container-fluid bg-2 text-center" id="Aktuelles">
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="margin">Aktuelles</h2>
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'vspaceone'
                        }}
                        options={{
                            height: '80vh'
                        }}
                        renderError={(_err) => <p>Twitter-Widget konnte nicht geladen werden.<br></br>Bitte überprüfe Deine Ad- oder Skriptblocker.</p>}
                    />
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
                    title: "Ausstattung",
                    text: "Wir haben zwei moderne Räume. In der Brücke stehen bequeme Sofas, ein Beamer und ein Kühlschrank. Im Maschinenraum, kann an Projekten gearbeitet werden.",
                    imageSrc: "pic/vspaceone_maschinenraum.jpg"
            },
            {
                    title: "3D Druck",
                    text: "Unser neuer Prusa i3 MK3s liefert dank zahlreicher Voreinstellungen und ausgeklügelter Features selbst nach kurzen Einweisungen in schnellster Zeit zu Ergebnissen die sich sehen lassen können.",
                    imageSrc: "pic/vspaceone_prusa_mk3s_small.jpg"
            },
            {
                    title: "Elektronik",
                    text: "Der Elektronikarbeitsplatz lädt zum Hacken ein. Stets zur Hand sind Lötkolben, Heißluftstation, Multimeter, Labornetzteile, digitales Oszilloskop sowie ein Haufen Zubehör und natürlich Kabel.",
                    imageSrc: "pic/vspaceone_big_psu_small.jpg"
            },
            {
                    title: "Reparatur",
                    text: "Eine Wand voll mit sortierten Elektronikkomponenten bietet die Qual der Wahl von üblicherweise benötigen Bauteile wie Widerstände oder Kondensatoren.",
                    imageSrc: "pic/vspaceone_drawer_wall_small.jpg"
            },
            {
                    title: "Holz und Metall",
                    text: "Unsere noch nicht allzu große, aber ständig wachsende, Ausstattung an Werkzeug und Maschinen steht jederzeit für große und kleine Projekte in unseren Räumen bereit.",
                    imageSrc: "pic/vspaceone_holzundmetall.jpg"
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
                                    <Slide index={idx}>
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

    return (
        <>
            <div className="row">                
                <div className={rowTextClasses}>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>

            <div style={{zIndex: "1", overflow: "hidden", backgroundSize: "cover", objectFit: "contain", backgroundPosition: "center", backgroundImage: `url(${props.imageSrc})`, height: "100%", maxHeight: "100vh"}}></div>
        </>
    )
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
        /*
                <p>Du findest uns in der Doppelstadt Villingen-Schwenningen.</p>
                <p>Unsere Adresse lautet:<br/> { address  }</p><br/>
                <p>Finde uns über What3Words:<br/><a href = "https://w3w.co/stehen.stetig.mächtig">///stehen.stetig.mächtig</a></p><br/>
                <p></p>

                <p>Wenn der vspace.one offen ist kannst du uns auch anrufen.</p>
                <p>Telefon: <a href={"tel:" + phone} style={{color: '#dddddd'}}>{phone}</a></p>
        */

        return (
            <div className="container-fluid bg-2 text-center" id="Ort">
                <h2 className="margin">Wo findest du uns?</h2>

                <p>Du findest uns in der Doppelstadt Villingen-Schwenningen.</p>
                <p>Unsere Adresse lautet:<br/> Am Krebsgraben 15 (Gebäude 8) <br/> 78048 Villingen-Schwenningen </p>
                <p>Für den exakten Standort kannst du uns auch über What3Words finden:<br/><a href = "https://w3w.co/rotes.hörer.dorfplatz">///rotes.hörer.dorfplatz</a></p><br/>
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

                <p>Aktuell sind wir leider nicht per Telefon erreichbar.</p>                
            </div>
        );       

    }
}

export default Home;
