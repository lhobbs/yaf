import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'
// import BigCalendar from 'react-big-calendar'
import EventCard from './EventCard'
import RSVP from './RSVP'
import './Calendar.css'
// import Slider from 'react-viewport-slider'
// // a localizer for BigCalendar
// BigCalendar.momentLocalizer(moment)

// require('../node_modules/react-big-calendar/lib/css/react-big-calendar.css')
require('./gcal');
// var cal = require('./gcal.js')
import {getEvents, getUpcomingEvents} from './gcal.js'

class Calendar extends React.Component {
  constructor () {
    super();
    this.state = {
      events: [],
      upcomingEvents: [],
      selectedEvent: null
    }
    this.rsvpEvent = this.rsvpEvent.bind(this);
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
    getUpcomingEvents(events => {
        this.setState({upcomingEvents: events})
    })
  }

  render () {
    return (
      <div className="Calendar">
          <div className="row">
              <h1>Upcoming Events</h1>
        </div>
        <div className="row">
            {this.state.upcomingEvents.map(event => 
                <EventCard event={event} key={event.id} onClick={() => this.rsvpEvent(event)} isSelected={this.state.selectedEvent && this.state.selectedEvent.id == event.id} isAnySelected={this.state.selectedEvent} />
            )}
        </div>
        {this.state.selectedEvent &&
         this.renderRSVP()}
      </div>
    )
  }
  renderSelectedEvent() {
     return (<div>
              <h1>{this.state.selectedEvent.title}</h1>
              <p>{moment(this.state.selectedEvent.start).format('dddd, MMMM Do YYYY, h:mm a')} - {moment(this.state.selectedEvent.end).format('h:mm a')}</p>
              <p>{this.state.selectedEvent.location}</p>
            </div>)
  }
  renderEventCard(event) {
      return <EventCard event={event} key={event.id} />
  }
  renderRSVP() {
    return <RSVP event={this.state.selectedEvent} />
  }
  rsvpEvent(event) {
    this.setState({selectedEvent: event});
    // console.log(event)
  }
 }

function EventAgenda({event}) {
  return (<p>{ event.title } @ {event.location}</p>)
  }

export default Calendar;
