import React, { Component } from 'react';
import './index.css';
import DeleteNote from '../DeleteNote/DeleteNote.js';

class NoteCard extends Component {
  constructor() {
    super()
    this.state = {
      showDelete: false,
      notesArray: [
        {
          _id: '58pagj4489fh5767n4wga',
          title: 'First Note',
          textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed ipsum quis velit dictum tristique in ac nisi.',
          createdAt: 1544705687436,
        },
        {
          _id: '3tu384m-v348qwvu4',
          title: 'Second Note',
          textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed ipsum quis velit dictum tristique in ac nisi.',
          createdAt: 1544705687437
        },
        {
          _id: 'f2w39f8u23fh2q39780f',
          title: 'Third Note',
          textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed ipsum quis velit dictum tristique in ac nisi.',
          createdAt: 1544705687438
        },
        {
          _id: '34f3h789q20fh7832312r',
          title: 'Fourth Note',
          textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed ipsum quis velit dictum tristique in ac nisi.',
          createdAt: 1544705687438
        },
        {
          _id: '342t90uf298hjg258g9h',
          title: 'Fifth Note',
          textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed ipsum quis velit dictum tristique in ac nisi.',
          createdAt: 1544705687438
        },

      ]
    }
  }

  showModal = () => {
    this.setState({showDelete: !this.state.showDelete})
  } //toggle/flip, reverses true/false


  render() {
    return (
      <div className='noteCard_container'>
      <div className='noteCard_topContent'>
        <div className="noteCard_header">
          <h3>{this.state.notesArray[0].title}:</h3>
        </div> 
        <div>
          <a href='#' className='edit_delete'>edit</a>
          <a 
            href='#' 
            className='edit_delete'
            onClick={this.showModal}
          >delete</a>
        </div>
      </div>
        <div className='notes_list'>
          <p className="">{this.state.notesArray[0].textBody}</p>
        </div>
        <DeleteNote 
          toggle={this.state.showDelete}
          updateParent={this.showModal}/>
      </div>
    );
  }
}

export default NoteCard;