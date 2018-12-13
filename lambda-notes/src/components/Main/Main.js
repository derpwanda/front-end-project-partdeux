import React, { Component } from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList.js'

class Main extends Component {
  render() {
    return (
      <div className="main_container">
        <NotesList />
      </div>
    );
  }
}

export default Main;