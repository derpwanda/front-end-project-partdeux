import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';

const mapStateToProps = (state) => {
  return {
    notesArray: state
  }
}

class NotesList extends Component {
  constructor() {
    super()
    this.state = {
      notesArray: [],
    }
  }

  componentWillMount() {
    let reversed = Array.from(this.props.notesArray).reverse();
    this.setState({notesArray: reversed});
  }

  generateNotes = (note, index) => {
    return (
      <Link to={`/note/${note._id}`} className='unstyled_link' key={note.index}>
        <div className='note'>
          <div>
            <h4>{note.title}</h4>
            <hr></hr>
            <p>{note.textBody}</p>
          </div>
        </div>
      </Link>

    )
  }

  render() {
    //console.log('props noteslist',this.props)
    return (
      <div className='noteslist_container'>
        <div className="noteslist_header"><h3>Your Notes:</h3></div>
          <div className='notes_list'>
            {this.state.notesArray.map(this.generateNotes)}
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {/*actions*/})(NotesList);