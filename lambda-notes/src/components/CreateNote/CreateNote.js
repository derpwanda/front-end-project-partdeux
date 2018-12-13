import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions';
import './index.css';

class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      note: {
        title: '',
        textBody: '',
      }
    }
  }

  handleSave = () => {
    console.log('Note',this.state.note);
    let newNote = {...this.state.note};
    newNote['_id'] = Date.now();
    newNote.createdAt = Date.now();
    this.props.createNote(newNote);
    this.props.history.push('/')
  }

  handleChange = (event) => {
    let temp = {...this.state.note}
    temp[event.target.name] = event.target.value
    this.setState({ note: temp });
  }

  render() {
    return (
      <div className='noteCard_container'>
        <div className='noteCard_topContent'>
          <div className="noteCard_header">
            <h3>Create New Note:</h3>
          </div> 
        </div>

        <div className='createNote_form'>
          <input 
            type='text' 
            className='createNote_title'
            placeholder='Note Title'
            name='title'
            value={this.state.note.title}
            onChange={this.handleChange} 
          />
          <textarea 
            className='createNote_textBody'
            placeholder='Note Content'
            name='textBody' 
            rows='20'
            value={this.state.note.textBody}
            onChange={this.handleChange}
          />
          </div>
          
          <div 
            className='nav_button createNote_button'
            onClick={this.handleSave}
          >Save</div>
          
        
      </div>
    );
  }
}

export default connect(null, {createNote})(CreateNote);