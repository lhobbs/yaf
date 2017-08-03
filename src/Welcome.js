import React, { Component } from 'react';
import { getVerse } from './verses.js'
import './Welcome.css'
 
class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      verses: [],
      verse: null
    }
  }
  render() {
      return <div className="Welcome">
                <p className="verse">{this.state.verse.verse}</p>
                <h1>Test Title</h1>
                {/*<h1>Young Adult Fellowship</h1>
                <h2>Colorado, Utah and Wyoming</h2>*/}
            </div>
  }
  componentWillMount() {
      getVerse((verses) => {
        this.setState({verses})
        // console.log(verses)
        let r = Math.floor(Math.random() * 3) + 1;
        // console.log(r, verses[r-1])
        this.setState({verse: verses[r-1]})
    })
  }
}

export default Welcome;