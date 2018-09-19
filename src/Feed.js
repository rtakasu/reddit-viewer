import React, { Component } from 'react';
import './App.css';
import Post from './Post.js';
import axios from 'axios';

class Feed extends Component {
  constructor(props) {
  	super();

  	this.state = {
  		posts: []
  	}

  }

  componentDidMount() {
  	axios.get('https://www.reddit.com/r/soccer/hot.json?sort=hot')
  		.then(res => {
  			const posts=res.data;
  			
  			this.setState({posts: posts.data.children});
  		})
  }

  render() {
  	console.log(this.state);
	this.state.posts.map((post) => console.log(post));
    return (
      <ul>
      	{ this.state.posts.map(post => <li key={post.data.title}>{post.data.title}</li>)}
      </ul>
    );
  }
}

export default Feed;
