import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Pages from './Pages';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Pages.Feed />
      </div>
    );
  }
}

export default App;
