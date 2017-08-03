import React, { Component } from 'react';

import './Posts.css'
 
class PostForm extends Component {
  render() {
      return <div className="PostForm">
                <form>
                    <label>Title</label>
                    <input className="form-control" type="text" />
                    <label>Content</label>
                    <textarea className="form-control"></textarea>
                    <label>Name (optional)</label>
                    <input className="form-control" type="text" />
                </form>             
            </div>
  }
}

export default PostForm;