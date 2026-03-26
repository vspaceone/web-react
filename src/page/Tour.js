import React, { Component } from 'react';
import ReactPiwik from 'react-piwik';
import { Viewer } from "photo-sphere-viewer";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import { VirtualTourPlugin } from "photo-sphere-viewer/dist/plugins/virtual-tour";

class Tour extends Component {

    componentDidMount() {
        ReactPiwik.push(['trackPageView'])

        window.addEventListener("resize", this.handleResize);
        console.log("MOUNT!")
        var viewer = new Viewer({
            container: document.querySelector('#photosphere'),
            plugins:
            [
              [MarkersPlugin, {}],
              [
                VirtualTourPlugin, 
                {
                  positionMode: VirtualTourPlugin.MODE_MANUAL,
                  renderMode  : VirtualTourPlugin.MODE_MARKERS
                }
              ]
            ],
            defaultLat: 0.0,
            touchmoveTwoFingers: true,
            mousewheelCtrlKey: true,
            loadingImg: "pic/logo_vspaceone.svg",
        });

        var virtualTour = viewer.getPlugin(VirtualTourPlugin);
        
        virtualTour.setNodes(
          [
            { 
              id: 'node-1', 
              panorama: '/pic/panorama/maschinenraum_big.jpg',
              name: 'Maschinenraum',
              links: 
              [
                { 
                  nodeId: 'node-2',     
                  "longitude": 0.7,    
                  "latitude": -0.00
                }
              ] 
            },
            { 
              id: 'node-2', 
              panorama: '/pic/panorama/labor_big.jpg',
              name: 'Labor', 
              links: [
                { nodeId: 'node-1',"longitude": 5.8,    "latitude": 0.00}, 
                { nodeId: 'node-3', "longitude": 1.0,    "latitude": 0.00}
              ] 
            },
            {
              id: 'node-3', 
              panorama: '/pic/panorama/bruecke_big.jpg',
              name: 'Brücke', 
              links: [
                { 
                  nodeId: 'node-2',  
                  "longitude": 5.3,    
                  "latitude": 0.00
                }
              ] 
            },
          ], '1');
    }

    render() {

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
                    <div id="photosphere" style={{ height: "100%", width: "100%" }}></div>

                </div>
            </>
        )
    }
}

export default Tour;
