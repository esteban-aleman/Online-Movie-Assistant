import 'babel-polyfill'
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import MainNav from './components/main-nav-component';
import Discover from './pages/discover-page';
import Saved from './pages/saved-page';

import './assets/style/_basics.scss';

const App = () => {
    return (
      <div className='App'>
          <header>
              <MainNav/>
          </header>
          <main>
              <Switch>
                  <Route exact path='/' component={Discover}/>
                  <Route path='/saved' component={Saved}/>
              </Switch>
          </main>
          <footer>
          </footer>
      </div>
    );
}

export default App;
