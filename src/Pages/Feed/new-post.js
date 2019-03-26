import React, { Component } from 'react';
import './new-post.scss';
export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: ''
    };
  }
  addPost() {
    const { url, title } = this.state;
    const { onNewPost } = this.props;
    if (url.length === 0) {
      alert('Url required');
      return;
    }
    if (title.length === 0) {
      alert('Title required');
      return;
    }
    onNewPost && onNewPost({ url, title });
    this.setState({ url: '', title: '' });
  }
  render() {
    const { url, title } = this.state;
    return (
      <div className='new-post'>
        <div>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Url'
            aria-label='Enter Url'
            aria-describedby='basic-addon2'
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Title'
            aria-label='Title'
            aria-describedby='basic-addon2'
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            onKeyUp={e => e.keyCode === 13 && this.addPost()}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary btn-new-post'
              type='button'
              onClick={() => this.addPost()}
            >
              New Post
            </button>
          </div>
        </div>
      </div>
    );
  }
}
