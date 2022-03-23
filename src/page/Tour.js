import React, { Component } from 'react';
import { Img } from 'react-image';
import ReactPiwik from 'react-piwik';
import { Viewer, Animation } from "photo-sphere-viewer";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import { VirtualTourPlugin } from "photo-sphere-viewer/dist/plugins/virtual-tour";

class Tour extends Component {

    componentDidMount(){
        ReactPiwik.push(['trackPageView'])
    }

    componentDidMount() {

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
        var markers = viewer.getPlugin(MarkersPlugin);
        
        virtualTour.setNodes(
          [
            { 
              id: 'node-1', 
              panorama: '/pic/panorama/maschinenraum_big.jpg',
              name: 'Maschinenraum',
              markers: 
              [
                {
                  "id": "marker-cbaxnbjvy5u",
                  "image": "pin-red.png",
                  "longitude": 2.507,
                  "latitude": 0.00,
                  "width": 32,
                  "height": 32,
                  "tooltip": {
                    "content": "X-Carve",
                    "position": "top center"
                  }
                }
              ], 
              links: 
              [
                { 
                  nodeId: 'node-2',     
                  "longitude": 0.8,    
                  "latitude": -0.029
                }
              ] 
            },
            { 
              id: 'node-2', 
              panorama: '/pic/panorama/labor_big.jpg',
              name: 'Labor', 
              markers: [
                {
                  "id": "marker-9a6v0fyx216",
                  "image": "pin-red.png",
                  "longitude": 2.180,
                  "latitude": -0.3,
                  "width": 32,
                  "height": 32,
                  "tooltip": {
                    "content": "Anus Tee",
                    "position": "top center"
                  }
                }
              ],      
              links: [
                { nodeId: 'node-1',"longitude": 5.781,    "latitude": 0.00}, 
                { nodeId: 'node-3', "longitude": 1.088,    "latitude": 0.00}
              ] 
            },
            {
              id: 'node-3', 
              panorama: '/pic/panorama/bruecke_big.jpg',
              name: 'Zehn Vorne', 
              links: [
                { 
                  nodeId: 'node-2',  
                  "longitude": 5.264,    
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

class Sponsor extends Component {

    constructor(props){
        super(props)
    }

    render() {

        let key = this.props.num
        let logoFirst = (key%2 === 0)
        let logo = this.props.logo
        let text = this.props.text
        
        let itemStyle = {textAlign:'center'}

        let bigView = (
            <div style={{display:'flex', alignItems:'center'}} className="row hidden-xs hidden-sm">
                <div {...itemStyle} className="col-xs-offset-0 col-xs-8">
                    {logoFirst ? logo : text}
                </div>
                <div {...itemStyle} className="col-xs-offset-0 col-xs-4">
                    {logoFirst ? text : logo}
                </div>
            </div>
        )

        let smallView = (
            <div className="row visible-xs visible-sm">
                <div {...itemStyle} className="col-xs-offset-0 col-xs-12">
                    {logo}
                </div>
                <div {...itemStyle} className="col-xs-offset-0 col-xs-12">
                    {text}
                </div>
            </div>  
        )

        return (
            <div style={{marginBottom: '10rem'}}>
                {bigView}
                {smallView}
            </div>
        );
    }
}
