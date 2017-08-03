import React, { Component } from 'react';
import PostForm from './PostForm'
import './Posts.css'
 
class Posts extends Component {
  render() {
      return <div className="Posts">
                <h1>Hear our stories</h1>
                <PostForm />
            </div>
  }
}

export default Posts;