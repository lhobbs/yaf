import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar'
import Welcome from './Welcome'
import RSVP from './RSVP'
import Posts from './Posts'
import Slider from 'react-viewport-slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider>
        <div itemClass="has-overlay img-test" buttonLabel="Upcoming Events" itemStyle={{ backgroundSize: 'cover' }}>
          <div className="title">{this.renderWelcome()}</div>
        </div>
        <div itemStyle={{ backgroundColor: '#A5E0AF'}} buttonLabel="Posts">
            {this.renderCalendar()}
        </div>
        <div itemStyle={{ backgroundColor: '#776A8D' }}>
          <div className=""><Posts /></div>
        </div>
      </Slider>
      </div>
    );
  }
  renderWelcome() {
    return <Welcome />
  }
  renderCalendar() {
    return <Calendar/>
  }
  renderRSVP() {
    return <RSVP />
  }
}

export default App;
