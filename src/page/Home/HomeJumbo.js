import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Viewer, Animation } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css"
class HomeJumbo extends Component {

    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth, imageIndex: 0 };
    }

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
      const panoramaList = [
        '/pic/panorama/maschinenraum_quarter.jpg',
        '/pic/panorama/labor_quarter.jpg',
        '/pic/panorama/bruecke_quarter.jpg'
      ];

      window.addEventListener("resize", this.handleResize);
      console.log("MOUNT!")
      var viewer = new Viewer({
        container: document.querySelector('#photosphere'),
        panorama: '/pic/panorama/maschinenraum_quarter.jpg',
        defaultLat: 0.0,
        autorotateDelay: 3000,
        autorotateSpeed: "1rpm",
        loadingImg: "pic/logo_vspaceone.svg",
        navbar: null
      });

      viewer.on('ready', intro);

      viewer.on('position-updated ', nextImage);

      function intro() {
        // default far plane is too close to render fisheye=4
        // you can also skip this line and start with fisheye=2
        viewer.renderer.camera.far *= 2;
      
        new Animation({
          properties: {
            lat: { start: -Math.PI / 2, end: 0 },
            long: { start: 0, end: Math.PI / 2 },
            zoom: { start: 0, end: 50 },
            fisheye: { start: 4, end: 0 }
          },
          duration: 2000,
          easing: 'inOutQuad',
          onTick: (properties) => {
            viewer.setOption('fisheye', properties.fisheye);
            viewer.rotate({ longitude: properties.long, latitude: properties.lat });
            viewer.zoom(properties.zoom);
          }
        });
      }
      var ziz = this;
      function nextImage(){
        if (viewer.getPosition().longitude > 6 && viewer.getPosition().longitude < 6.1){
          const index = ziz.state.imageIndex;
          var nextIndex = index == (panoramaList.length-1) ? 0 : (index+1);
          ziz.setState({imageIndex: nextIndex})
          viewer.setPanorama(panoramaList[nextIndex],{showLoader: false})
          console.log("switch to panorama index " + nextIndex)
        }
      }
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    } 

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    render() {

        const showButtons = false;

        const boxHeight = '670px';

        const h1Style = {
          textShadow: "2px 2px 4px black"
        };

        const linkStyle = {
            color:"white", 
            textDecoration:"",
            zIndex: "10"
        }

        const images = [
          "pic/vspaceone_prusa_mk3s_small.jpg",
          "pic/vspaceone_4bit_adder_small.jpg",
          "pic/vspaceone_motoren_small.jpg",
          "pic/vspaceone_cap_drawers_small.jpg",
          "pic/vspaceone_big_psu_small.jpg",
          "pic/vspaceone_scope_small.jpg"
        ]

        /*
        
        <img 
                    src="pic/logo_vspaceone.svg" 
                    className="img-responsive img-circle margin" 
                    alt="Bird" width="350" height="350"
                    style={
                      verticalAlign: 'middle',
                      display: 'inline'
                  }}/>
        
        */

        return (
          <>
            <div
              className="container-fluid bg-1 text-center"
              style={{
                position: 'relative',
                padding: 0,
                height: "100vh",
                overflow: "hidden",
                paddingTop: "80px"
              }}
            >
              <div id="photosphere" style={{height: "100%", width: "100%"}}></div>
              <Particles
                height={"100%"}
                params={getParticleConfig(this.state.windowWidth)}
                style={{
                  zIndex: 5,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "#bfbfbf7f"
                }}
              />
              <div
                id="particles-overlay"
                style={{
                  height: "100%",
                  paddingTop: '80px',
                  zIndex: 10,
                  position: 'absolute',
                  width: '100%',
                  top: 0
                }}
              >
                <h1 style={{textShadow: h1Style.textShadow, marginTop: "5vh" }}>vspace.one</h1>

                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100vw",
                  marginBottom: "5vh"
                }}>
                  <h1 style={h1Style}>
                    Ein <i><a style={linkStyle} href="https://de.wikipedia.org/wiki/FabLab" >Makerspace </a></i>
                    und <i><a style={linkStyle} href="https://de.wikipedia.org/wiki/Hackerspace" >Hackerspace</a></i>.
                  </h1>
                  <h3 style={h1Style}>
                    <a style={linkStyle} href="/tour" >Hier gehts zur virtuellen Space-Tour!</a>
                  </h3>
                </div>
              </div>

            </div>
          </>
        );
    }
}

export default HomeJumbo;

function getParticleConfig(width){
  return {
    "particles": {
      "number": {
        "value": Math.max(30, Math.min( width / 16,200)), //200
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
          "speed": 40,
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
    /*"interactivity": {
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
    },*/
    "retina_detect": true
  }
}