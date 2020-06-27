import React, { Component } from 'react';
import Particles from 'react-particles-js';

class HomeJumbo extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    render() {

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
                  backgroundColor: '#08A059',
                  height: "670px"
              }}
          >
              <Particles height="670px" params={particleConfig} />
              <div 
                  id="particles-overlay"
                  style={{
                      height: '670px',
                      marginTop: '30px',
                      zIndex: 10,
                      position: 'absolute',
                      width: '100%',
                      top: 0
                  }}
              >
                  <h1 className="margin">Was ist der vspace.one?</h1>
                  <img 
                      src="pic/logo_vspaceone.svg" 
                      className="img-responsive img-circle margin" 
                      alt="Bird" width="350" height="350"
                      style={{
                          verticalAlign: 'middle',
                          display: 'inline'
                      }}/>
                  <h1>
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