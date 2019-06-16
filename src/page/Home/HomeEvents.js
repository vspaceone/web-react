import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/de';

class HomeEvents extends Component {
 
    constructor(props){
        super(props)

        this.state = {
            events: {}
        }        
    }

    componentDidMount() {
        // Repeat status fetch every second
        this.interval = setInterval(() => {
            fetch('/events.json')
            .then(response => response.json())
            .then(json => {
                this.setState({events: json})
            })
        }, 1000);
    }

    componentWillUnmount() {
        // Remove interval for fetching state after unmount
        clearInterval(this.interval);
    }

    render() {        

        var events = ( <div></div> )
        
        if (this.state.events.events){
            events = this.state.events.events.map((val,index) => (           
                <HomeEvent key={index} event={val} />
            ));
        }

        return (
            <div className="container-fluid bg-2 text-center no-side-padding"  id="Events">
                <div className="row">
                    <h2 className="margin">Events</h2>
                    <div id="events">

                        <div className="event">
                            <div className="row">
                                <div className="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-2 no-side-padding" >
                                    <div className="event_date align-middle">
                                        <div className="event_day text-center">Di</div>
                                        <div className="event_month text-center">jeden</div>
                                    </div>
                                </div>
                                <div className="col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-6 no-side-padding" >
                                    <div className="event_details">
                                        <span className="event_titleline">
                                        <span className="event_title">Chaostreff</span>
                                        <span className="event_time">ab 19:00 Uhr</span>
                                        <span className="event_icons">
                                            <span className="glyphicon-calendar glyphicon"></span>
                                        </span>
                                        </span>
                                        <span className="event_desc">
                                            <p>Wir treffen uns jeden Dienstag ab 19:00 Uhr im vspace.one. Das ist der perfekte Termin, wenn uns kennenlernen willst oder einfach mal vorbeischauen möchtest. Komm einfach vorbei und sei willkommen!</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        { events }

                    </div>
                </div>
            </div>
        );
    }
}

class HomeEvent extends Component {

    constructor(props){
        super(props)

        this.iconStyle = ({
            color: "#777777",
            marginRight: "8px"
        })
    }

    render(){

        var event = this.props.event

        var date = (<div></div>)

        if (event.start && event.end){
            date = (
                <span className="event_time">
                    <Moment 
                        locale="de"
                        date={new Date(event.start)}
                        format=" HH:mm"
                    /> bis
                    <Moment 
                        locale="de"
                        date={new Date(event.end)}
                        format=" HH:mm"
                    /> Uhr
                </span>
            )
        } else if (!event.end){
            date = ( 
                <span className="event_time">
                    ab <Moment 
                        locale="de"
                        date={new Date(event.start)}
                        format=" HH:mm"
                    /> Uhr
                </span> 
            )
        }

        return (
            <div className="event">
                <div className="row">
                    <div className="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-2 no-side-padding" >
                        <div className="event_date align-middle">
                            <div className="event_day text-center">
                                <Moment 
                                    locale="de"
                                    date={new Date(event.start)}
                                    format="DD"
                                />
                            </div>
                            <div className="event_month text-center">
                                <Moment 
                                    locale="de"
                                    date={new Date(event.start)}
                                    format="MMMM"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-offset-1 col-xs-10 col-md-offset-0 col-md-6 no-side-padding" >
                        <div className="event_details">
                            <span className="event_titleline">
                                <span className="event_title">{event.title}</span>
                                <br></br>
                                {date}
                                <span className="event_icons">
                                    {event.link?
                                        (
                                            <a 
                                                href={event.link} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span style={this.iconStyle} className="glyphicon-link glyphicon"></span>
                                            </a>
                                        ):""
                                    }

                                    {event.download?
                                        (
                                            <a 
                                                href={event.download} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span style={this.iconStyle} className="glyphicon-file glyphicon"></span>
                                            </a>
                                        ):""
                                    }

                                    <span className="glyphicon-calendar glyphicon"></span>
                                </span>
                            </span>
                            <span className="event_desc">
                                <p dangerouslySetInnerHTML={{__html:event.desc}}></p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default HomeEvents;