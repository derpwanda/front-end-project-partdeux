import React, { Component } from 'react';
import SideNav from './components/SideNav/SideNav.js';
import Main from './components/Main/Main.js'


class App extends Component {
  render() {
    return (
      <div className='app'>
        <SideNav />
        <Main />
      </div>
    );
  }
}

export default App;
