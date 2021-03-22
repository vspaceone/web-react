import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class HomeJumbo extends Component {

    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
    }

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    } 

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    render() {

        var boxHeight = '670px';

        var h1Style = {textShadow: "2px 2px 4px black"};

        var linkStyle = {
            color:"white", 
            textDecoration:""
        }

        return (
            <div 
                className="container-fluid bg-1 text-center"
                style={{
                    position: 'relative',
                    padding: 0,
                    height: boxHeight,
                    overflow: "hidden"
                }}
            >
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        totalSlides={6}
                        infinite={true}
                        interval={10000}
                        isPlaying={true}
                    >
                        <Slider>
                            <Slide index={0}>
                              <img src="pic/vspaceone_prusa_mk3s_small.jpg" style={{width: "100%", marginTop: "-15vh",zIndex: "1"}}/>
                            </Slide>
                            <Slide index={1}>
                              <img src="pic/vspaceone_4bit_adder_small.jpg" style={{width: "100%", marginTop: "-18vh", zIndex: "1"}}/>
                            </Slide>
                            <Slide index={2}>
                              <img src="pic/vspaceone_motoren_small.jpg" style={{width: "100%", marginTop: "-14vh", zIndex: "1"}}/>
                            </Slide>
                            <Slide index={3}>
                              <img src="pic/vspaceone_cap_drawers_small.jpg" style={{width: "100%", zIndex: "1"}}/>
                            </Slide>
                            <Slide index={4}>
                              <img src="pic/vspaceone_big_psu_small.jpg" style={{width: "100%", marginTop: "-8vh", zIndex: "1"}}/>
                            </Slide>
                            <Slide index={5}>
                              <img src="pic/vspaceone_scope_small.jpg" style={{width: "100%", marginTop: "-20vh", zIndex: "1"}}/>
                            </Slide>
                          </Slider>
                    </CarouselProvider>
                    <Particles 
                        height={boxHeight}
                        params={particleConfig}
                        style={{
                            zIndex: 5,
                            position: "absolute",
                            top: 0,
                            left: 0
                        }}
                    />
                    <div 
                        id="particles-overlay"
                        style={{
                            height: boxHeight,
                            paddingTop: '30px',
                            zIndex: 10,
                            position: 'absolute',
                            width: '100%',
                            top: 0
                        }}
                    >
                    <h1 className="margin" style={h1Style}>Was ist der vspace.one?</h1>
                    <img 
                        src="pic/logo_vspaceone.svg" 
                        className="img-responsive img-circle margin" 
                        alt="Bird" width="350" height="350"
                        style={{
                            verticalAlign: 'middle',
                            display: 'inline'
                        }}/>
                    <h1 style={h1Style}>
                        Ein <i><a style={ linkStyle } href="https://de.wikipedia.org/wiki/FabLab" >Makerspace </a></i>  
                        und <i><a style={ linkStyle } href="https://de.wikipedia.org/wiki/Hackerspace" >Hackerspace</a></i>.
                    </h1>
                </div>
            </div>
        );
    }
}

export default HomeJumbo;

var particleConfig = {
    "particles": {
    "number": {
      "value": 200,
      
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