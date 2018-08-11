import React, { Component } from 'react';

import Header from './components/header';
import Discover from './pages/discover';

import './assets/style/_basics.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <header className='App-header'>
              <Header />
          </header>
          <Discover/>
          <footer>
          </footer>
      </div>
    );
  }
}

export default App;
