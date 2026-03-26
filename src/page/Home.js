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
                    <p>
                        Unser Ziel ist der Wissensaustausch sowie die Bildung aller Interessierten
                        in den Bereichen neuartiger computergestützter Technologien (wie zum Beispiel, aber nicht ausschließlich,
                        3D-Druck, CNC, Internet der Dinge und Robotik), der Elektrotechnik und Elektronik
                        sowie auf Gebieten der Reparatur und Wartung.
                        <br></br><br></br>
                        Natürlich bieten wir auch ganz im Sinne aller anderen Hacker- und Makerspaces eine Plattform,
                        um seinen Interessen in diesen Gebieten nachzugehen – von Programmieren bis Holz- und Metallwerken ist fast alles dabei.
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
                        <p>Du möchtest uns und unsere Räumlichkeiten gerne persönlich kennenlernen? Schau doch dienstags ab 18:00 bei uns in der Am Krebsgraben 15 in Villingen vorbei. Dienstags findet bei uns jede Woche der Chaostreff statt.</p>
                    </div>
                    <div className="col-sm-6">
                        <h3>Mitglied werden</h3>
                        <p>Bei uns kann jeder mitmachen. Interessierte Schüler, Studenten und Erwachsene, die sich für kreativen Umgang mit Technik begeistern, sind willkommen. Wenn euch gefällt, was wir tun, und ihr uns unterstützen wollt, findet ihr unser Beitrittsformular <Link to="/mitgliedwerden">hier</Link>.</p>
                    </div>
                    <div className="col-sm-6">
                        <h3>Telegram</h3>
                        <p>Für die regelmäßige Kommunikation verwenden wir unsere <a href="https://t.me/joinchat/DmNdswpnKgox_zzqENYXiA">Telegram-Gruppe</a> und unseren <a href="https://matrix.to/#/#vspaceone-general:matrix.org">Matrix-Raum</a>. Telegram und Matrix sind Nachrichten-Apps, ähnlich wie WhatsApp. Zudem sind beide Chats miteinander verbunden, nutze also, was dir lieber ist! Wenn du dich interessierst und wissen willst, was bei uns los ist, tritt gerne bei oder schreibe uns eine E-Mail an info[at]vspace.one.</p>
                    </div>
                    <div className="col-sm-6">
                        <h3>Spenden</h3>
                        <p>Dir gefällt, was wir machen, aber du hast keine Möglichkeit oder Lust, Mitglied zu werden? Gerne nehmen wir, wie <Link to="/spenden">hier beschrieben</Link>, deine Spende als Überweisung an.</p>
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
                text: "Sich gegenseitig motivieren, inspirieren, helfen und voneinander lernen. Manches macht gemeinsam einfach mehr Spaß!",
                imageSrc: "pic/vspaceone_gemeinschaft.jpg"
            },
            {
                title: "3D Druck",
                text: "Wir haben Drucker von Bambu, Prusa, Voron und weitere, um selbst nach kurzer Einweisung in schnellster Zeit Ergebnisse, die sich sehen lassen können, zu erzielen.",
                imageSrc: "pic/replikatorraum-drucker.jpg"
            },
            {
                title: "Elektronik",
                text: "Der Elektronikarbeitsplatz im Laborlädt zum Hacken ein. Stets zur Hand sind Lötkolben, Heißluftstation, Multimeter, Labornetzteile, digitales Oszilloskop sowie ein Haufen Zubehör und natürlich Kabel.",
                imageSrc: "pic/vspaceone_big_psu_small.jpg"
            },
            {
                title: "Reparatur",
                text: "Eine Wand voll mit sortierten Elektronikkomponenten bietet die Qual der Wahl von üblicherweise benötigten Bauteilen wie Widerständen oder Kondensatoren.",
                imageSrc: "pic/laborneu.jpg"
            },
            {
                title: "Holz und Metall",
                text: "Unsere noch nicht allzu große, aber ständig wachsende, Ausstattung an Werkzeug und Maschinen steht jederzeit für große und kleine Projekte in unseren Räumen bereit.",
                imageSrc: "pic/maschinenraumneu.jpg"
            },
            {
                title: "Ausstattung",
                text: "Wir haben vier moderne Räume. In der Brücke stehen bequeme Sofas, ein Beamer und ein Kühlschrank. Im Maschinenraum kann man dank unserer vielen Maschinen an größeren Projekten arbeiten. Das Labor ist mit einem großzügigen Elektronikarbeitsplatz ausgestattet und der Replikatorraum bietet 3D-Drucker und gemütliche Plätze, um ihnen bei der Arbeit zuzuschauen.",
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

        const mapLink = "http://www.openstreetmap.org/?mlat=" + pos[0] + "&amp;mlon=" + pos[1] + "#map=18/" + pos[0] + "/" + pos[1];


        return (
            <div className="container-fluid bg-2 text-center" id="Ort">
                <h2 className="margin">Wo findest du uns?</h2>

                <p>Du findest uns in der Doppelstadt Villingen-Schwenningen.</p>
                <p>Unsere Adresse lautet:<br/> { address  }</p><br/>
                <p>Finde uns über What3Words:<br/><a href = "https://w3w.co/rotes.hörer.dorfplatz">{"///rotes.hörer.dorfplatz"}</a></p><br/>
                <p></p>

                <p>Wenn der vspace.one offen ist, kannst du uns auch anrufen.</p>
                <p>Telefon: <a href={"tel:" + phone} style={{color: '#dddddd'}}>{phone}</a></p>

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
                <a href={mapLink}><i>Große Karte anzeigen</i></a>
                </small>             
            </div>
        );       

    }
}

export default Home;
