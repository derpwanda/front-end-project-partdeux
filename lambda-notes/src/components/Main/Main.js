import React, { Component } from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList.js'
import NoteCard from '../NoteCard/NoteCard.js'
import CreateNote from '../CreateNote/CreateNote.js'
import EditNote from '../EditNote/EditNote.js'
import DeleteNote from '../DeleteNote/DeleteNote.js'

class Main extends Component {
  render() {
    return (
      <div className="main_container">
        <NoteCard />
      </div>
    );
  }
}

export default Main;