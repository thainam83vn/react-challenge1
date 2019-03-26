import React, { Component } from 'react';
import './feed.scss';
import NewPost from './new-post';
import Post from './post';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  render() {
    const { posts } = this.state;
    return (
      <div className='feeds'>
        <NewPost
          onNewPost={post =>
            this.setState({
              posts: [
                { ...post, time: new Date().getTime() },
                ...this.state.posts
              ]
            })
          }
        />
        {posts.map(p => (
          <Post key={p.url} {...p} />
        ))}
      </div>
    );
  }
}
