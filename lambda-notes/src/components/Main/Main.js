import React, { Component } from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList.js'
import NoteCard from '../NoteCard/NoteCard.js'
import CreateNote from '../CreateNote/CreateNote.js'

class Main extends Component {
  render() {
    return (
      <div className="main_container">
        <CreateNote />
      </div>
    );
  }
}

export default Main;