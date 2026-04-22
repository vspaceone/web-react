import React, { Component } from 'react';
import ReactPiwik from 'react-piwik';

import Particles from 'react-particles-js';

class FAQ extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <div>
                <div
                className="container-fluid bg-1 text-center"
                style={{
                    position: 'relative',
                    padding: 0,
                    backgroundColor: '#08A059',
                    height: "200px"
                }}
                >
                    <Particles height="200px" params={particleConfig} />
                    <div
                        id="particles-overlay"
                        style={{
                            height: '200px',
                            marginTop: '30px',
                            zIndex: 10,
                            position: 'absolute',
                            width: '100%',
                            top: 0
                        }}
                    >
                        <h1 className="margin">Fragen und Antworten</h1>
                    </div>
                </div>

                <div className="container-fluid bg-2 text-left">
                    <div className="faq-item">
                        <h2 className="margin">Was ist der vspace.one e.V.?</h2>
                        <p>Wir sind ein gemeinnütziger Hacker- und Makerspace!</p>
                    </div>

                    <div className="faq-item">
                        <h2 className="margin">Was ist ein Hackerspace? Und was ist ein Makerspace?</h2>
                        <p>
                            Hacker- und Makerspaces sind Orte für Wissensaustausch und Bildung rund um Wissenschaft und Technologie.
                            <br/>
                            Hackerspaces fokussieren sich eher auf Programmierung und Informationstechnik, während Makerspaces den Schwerpunkt auf handwerkliche Gebiete wie 3D-Druck und Holzbearbeitung legen.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h2 className="margin">Was ist ein Hacker? Sollte ich Angst haben?</h2>
                        <p>
                            Bei uns bedeutet "Hacker" nicht das, was man vielleicht aus den Nachrichten kennt.
                            <br/><br/>
                            Kurz gesagt: Ein Hacker ist ein Tüftler.
                            <br/><br/>
                            Oder wie <a href="https://de.wikipedia.org/wiki/Wau_Holland">Wau Holland</a> es formulierte:
                            „Ein Hacker ist jemand, der versucht einen Weg zu finden, wie man mit einer Kaffeemaschine Toast zubereiten kann."
                            Ein Hacker löst also nicht nur Probleme – er experimentiert und erkundet das Machbare, wo er nur kann!
                            <br/><br/>
                            Mehr dazu im <a href="https://de.wikipedia.org/wiki/Hacker">Wikipedia-Artikel zum Begriff „Hacker"</a>.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h2 className="margin">Was macht ihr konkret?</h2>
                        <p>
                            Wir tauschen Wissen aus und bilden uns weiter – in Bereichen wie 3D-Druck, CNC, Internet der Dinge, Robotik, Elektrotechnik und Reparatur.
                            Zudem versuchen wir dieses Wissen auch in Kinderferienprogrammen und Workshops weiterzugeben.
                            <br/><br/>
                            Und wie jeder gute Hacker- und Makerspace bieten wir eine Plattform, um seinen Interessen in diesen Gebieten nachzugehen.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h2 className="margin">Wo finde ich euch?</h2>
                        <p>Unsere aktuelle Adresse und eine Karte findest du <a href="https://vspace.one/#Ort">hier auf der Startseite</a>.</p>
                    </div>

                    <div className="faq-item">
                        <h2 className="margin">Wo darf ich parken?</h2>
                        <p>Auf dem Gelände gibt es viele freie Parkplätze. Parkt am besten möglichst nahe an der in Google Maps markierten Stelle auf einem nicht reservierten Stellplatz.</p>
                    </div>

                    <div className="faq-item">
                        <h2 className="margin">Wann treffe ich euch an?</h2>
                        <p>
                            Jeden Dienstagabend ab etwa 18:00 Uhr. Die meisten Mitglieder haben einen eigenen Schlüssel und sind oft auch zu anderen Zeiten da.
                            Ob gerade jemand vor Ort ist, siehst du am Raumstatus direkt auf vspace.one.
                            Über die SpaceAPI gibt es auch fertige Apps dafür – oder du verarbeitest die Daten selbst: <a href="https://vspace.one/spaceapi.json">https://vspace.one/spaceapi.json</a>
                        </p>
                    </div>

                    <div className="faq-item">
                        <h2 className="margin">Wie kontaktiere ich euch?</h2>
                        <p>
                            Tritt unserer <a href="https://t.me/joinchat/DmNdswpnKgox_zzqENYXiA">Telegram-Gruppe</a> oder dem <a href="https://matrix.to/#/#vspaceone-general:matrix.org">Matrix-Raum</a> bei – beide Chats sind miteinander verbunden. Nutze einfach, was dir lieber ist.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h2 className="margin">Was muss ich können, um vorbeizukommen?</h2>
                        <p>
                            Sobald du unsere Räume betrittst, hast du alle Voraussetzungen erfüllt – Glückwunsch!
                            <br/><br/>
                            Bei uns ist jeder willkommen, ganz ohne Vorkenntnisse. Interesse und Neugierde schaden aber auf keinen Fall!
                        </p>
                    </div>

                    <div className="faq-item">
                        <h2 className="margin">Was sollte ich mitbringen?</h2>
                        <p>
                            Zeit und Interesse – das reicht schon. Ein Notebook dabei zu haben ist oft praktisch.
                            <br/><br/>
                            Wenn du abends kommst, nimm am besten ein Mobiltelefon mit, um uns anzurufen, falls die Tür zu ist.
                            Getränke gibt es bei uns für je 1 €, du darfst aber auch eigene mitbringen.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h2 className="margin">Muss ich Mitglied werden, um regelmäßig vorbeizukommen?</h2>
                        <p>
                            Nein! Ihr seid jederzeit eingeladen – wann immer wir offen haben, so oft ihr wollt.
                            <br/><br/>
                            Als Mitglied unterstützt ihr uns finanziell und genießt Vorteile – zum Beispiel einen eigenen Schlüssel für den Space!
                        </p>
                    </div>
                </div>

            </div>

        );
    }
}

export default FAQ;

var particleConfig = {
    "particles": {
    "number": {
      "value": 50,

    },
    "color": {
      "value": "#0ac26c"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#0ac26c"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 30,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#0ac26c",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
