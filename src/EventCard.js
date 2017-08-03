import React, { Component } from 'react';
import moment from 'moment'
import './EventCard.css'
 
class EventCard extends Component {
  render() {
      return <div className="EventCard col-md-4 col-sm-6 col-xs-12">
                <div className="top row">
                    <div className="col-sm-6">
                        <div className="date">
                            <span className="month">{moment(this.props.event.start).format('MMMM')}</span><br/>
                            <span className="day-num">{moment(this.props.event.start).format('DD')}</span><br/>
                            <span className="day-long">{moment(this.props.event.start).format('dddd')}</span>
                        </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                        <button className={(!this.props.isAnySelected || this.props.isSelected) ? "btn btn-rsvp" : "btn btn-not-selected" } onClick={this.props.onClick}><span className="glyphicon glyphicon-plus"></span></button>
                    </div>
                </div>
                <div className="bottom row">
                    <h3>{this.props.event.title}</h3>
                    <p>{moment(this.props.event.start).format('h:mm a')} - {moment(this.props.event.end).format('h:mm a')}</p>
                    <p>{this.props.event.location}</p>
                </div>
            </div>
  }
}

export default EventCard;