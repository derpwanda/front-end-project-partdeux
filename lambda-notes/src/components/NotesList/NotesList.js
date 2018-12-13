import React, { Component } from 'react';
import './index.css';

class NotesList extends Component {
  constructor() {
    super()
    this.state = {
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


  render() {
    return (
      <div className='noteslist_container'>
        <div className="noteslist_header"><h3>Your Notes:</h3></div>
          <div className='notes_list'>
            {this.state.notesArray.map((note, index) => {
              return (
                <div className="note" key={index + note.title}>
                <div>
                  <h4>{note.title}</h4>
                  <hr></hr>
                  <p>{note.textBody}</p>
                </div>
              </div>
              )
            })}
          </div>
      </div>
    );
  }
}

export default NotesList;