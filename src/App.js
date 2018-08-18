import 'babel-polyfill'
import React, { Component } from 'react';

import MainNav from './components/main-nav-component';
import Discover from './pages/discover-page';

import './assets/style/_basics.scss';

const App = () => {
    return (
      <div className='App'>
          <header>
              <MainNav/>
          </header>
          <main>
              <Discover/>
          </main>
          <footer>
          </footer>
      </div>
    );
}

export default App;
