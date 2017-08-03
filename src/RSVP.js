import React, { Component } from 'react';
// import {gMail} from './gmail.js'
import './RSVP.css'

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'lisahobbscom.powwebmysql.com',
//   user     : 'yafuser',
//   password : 'y@fU$3r',
//   database : 'yaf'
// });

// connection.connect();

 
class RSVP extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: null,
      email: null,
      phone: null,
      num: null,
      reqSent: false
    }
    this.findUser = this.findUser.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmitRSVP = this.onSubmitRSVP.bind(this);
  }
  render() {
      return <div className="RSVP col-md-6 col-md-offset-3">
                <h1>RSVP</h1>
                { this.props.event &&
                <div>
                  <p>{this.props.event.title}</p>
                  <p>{this.props.event.location}</p>
                </div>
                }
                <form >
                  <label className="pull-left">Name</label>
                  <input className="form-control" disabled={this.state.reqSent} type="text" name="name" value={this.state.name} onKeyUp={(input) => this.findUser(input)} onChange={this.onFormChange} />
                  <label className="pull-left">Phone</label>
                  <input className="form-control" disabled={this.state.reqSent} type="phone" name="phone" value={this.state.phone} onChange={this.onFormChange} />
                  <label className="pull-left">Email</label>
                  <input className="form-control" disabled={this.state.reqSent} type="email" name="email" value={this.state.email} onChange={this.onFormChange} />
                  <label className="pull-left">Number of Attendees</label>
                  {/*<div className="col-md-4 row">*/}
                    <input className="form-control" disabled={this.state.reqSent} type="number" name="num" value={this.state.num} onChange={this.onFormChange} />
                  {/*</div> */}
                  <br/>
                  <div className="col-md-12">
                    {!this.state.reqSent &&
                       <a type="submit" className="btn btn-primary pull-right" onClick={this.onSubmitRSVP}>Submit</a>}
                    {this.state.reqSent &&
                    <p>Your RSVP has been sent!</p>}
                  </div>
                </form>
            </div>
  }
  findUser(input) {
    // console.log(input.target.value)
  }
  onFormChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    // console.log(name, value)

  }
  onSubmitRSVP() {
    // console.log(this.state)
    this.setState({reqSent: true})
    // Email.send("lhobbs27@gmail.com",
    //           "lhobbs27@gmail.com",
    //           "RSVP!",
    //           "this is the body",
    //           {token: "ac4057fc-cb04-4a09-aa8a-4d7605106b29"});
    // connection.connect();
    // connection.query(`INSERT INTO RSVP (Event, Name, Phone, Email, NumberGuests) 
    //                   VALUES('April', '${this.state.name}', '${this.state.phone}', '${this.state.email}', ${this.state.num})`)
    // connection.end();
  }
}

export default RSVP;