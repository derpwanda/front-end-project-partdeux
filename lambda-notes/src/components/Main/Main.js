import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import NotesList from '../NotesList/NotesList.js'
import NoteCard from '../NoteCard/NoteCard.js'
import CreateNote from '../CreateNote/CreateNote.js'
import EditNote from '../EditNote/EditNote.js'
//import DeleteNote from '../DeleteNote/DeleteNote.js'

class Main extends Component {
  render() {
    return (
      <div className="main_container">
        <Route exact path='/' component={NotesList} />
        <Route exact path='/note/:id' component={NoteCard} />
        <Route exact path='/create' component={CreateNote} />
        <Route exact path='/edit/:id' component={EditNote} />
      </div>
    );
  }
}

export default Main;