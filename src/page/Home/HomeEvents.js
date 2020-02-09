import React, { Component } from 'react';
import ICal from 'ical';
import Moment from 'react-moment';
import 'moment/locale/de';

const DESIGNATOR_LINK = "Link"
const DESIGNATOR_DOWNLOAD = "Download"

class HomeEvents extends Component {
 
    constructor(props){
        super(props)

        this.state = {
            events: {}
        }        
    }

    componentDidMount() {
        // Repeat status fetch every second
        this.fetchEvents();
        this.interval = setInterval(() => {
            this.fetchEvents();
        }, /*30000*/30000);
    }

    componentWillUnmount() {
        // Remove interval for fetching state after unmount
        clearInterval(this.interval);
    }

    fetchEvents = function(){
        var eventAPI = {events:[]};

        // Fetch calendar data from public iCal resource
        ICal.fromURL("https://cloud.vspace.one/remote.php/dav/public-calendars/L9bQJLgjy7a7iHr7?export", {}, (err, data) => {
            
            if (err !== undefined){
                return;
            }

            for (let k in data) {
                if (data.hasOwnProperty(k)) {
                    var ev = data[k];
                    console.log(ev)
                    if (data[k].type === 'VEVENT') {
                        
                        // Discard old events
                        if (ev.end < Date.now()){
                            continue;
                        }

                        var isCancelled = false;
                        // Check if event is cancelled
                        if (ev.status !== undefined && ev.status === "CANCELLED"){
                            isCancelled = true;
                        }

                        // Only for recurring events
                        // Check if event is cancelled in reccurences
                        if (ev.rrule !== undefined) {                            
                            for (var recurrenceIdx in ev.recurrences){
                                var recurrence = ev.recurrences[recurrenceIdx];

                                if (recurrence.uid === ev.uid && recurrence.status === "CANCELLED"){
                                    isCancelled = true;
                                }
                            }                            
                        }

                        // Do not show cancelled events
                        if (isCancelled){
                            continue;
                        }

                        var rawDescription = "";
                        var download = "";
                        var link = "";
                        if (ev.description !== undefined){
                            var descriptionLines = ev.description.split("\n");                            

                            // Get lines starting with specific designators (<DESIGNATOR>: <Value>) and move separate them out from the description itself
                            for (var i in descriptionLines){
                                var line = descriptionLines[i];
                                var designator = line.substring(0, line.search(":"));

                                switch(designator){
                                    case DESIGNATOR_DOWNLOAD:
                                        download = line.substring(DESIGNATOR_DOWNLOAD.length + 1, line.length).trim();
                                        break;
                                    case DESIGNATOR_LINK:
                                        link = line.substring(DESIGNATOR_LINK.length + 1, line.length).trim();
                                        break;
                                    default:
                                        rawDescription += line + " ";
                                }
                            }
                            rawDescription = rawDescription.trim();
                        }

                        // Build object corresponding to the previously used event-api
                        eventAPI.events.push({
                            title: ev.summary,
                            start: ev.start,
                            end: ev.end,
                            loc1: ev.location,
                            loc2:"",
                            loc3:"",
                            price:0.0,
                            desc:`<p>${rawDescription}</p>`,
                            link: link,
                            download: download
                        });
                    }
                }
            }

            // Sort by starting date
            eventAPI.events.sort((a, b) => {
                if (a.start < b.start){
                    return -1;
                } else if (b.start < a.start) {
                    return 1;
                }
                return 0;
            })

            this.setState({events: eventAPI})
        });
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