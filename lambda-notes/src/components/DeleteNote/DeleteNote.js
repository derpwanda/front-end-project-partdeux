import React, { Component } from 'react';
import {deleteNote} from '../../actions'
import {connect} from 'react-redux';
import './index.css';

class DeleteNote extends Component {

  deleteHandler = () => {
    this.props.deleteNote(this.props.toDelete);
    this.props.history.push('/') //takes us back to the homepage; initalized in NoteCard
  }

  render() {
    console.log('delete note props', this.props)

    let toggle = this.props.toggle;
    return (
      <div className={ toggle ? 'delete_modal' : 'hidden'}>
        <div>
          <h4>Are you sure you want to delete this?</h4>
        </div>
        <div className='modal_button_container'>
          <div 
            className='modal_button modal_button--delete'
            onClick={this.deleteHandler}
            >Delete</div>
          <div 
            className='modal_button'
            onClick={this.props.updateParent}
            >No</div>
        </div>
      </div>
    );
  }
}

export default connect(null,{deleteNote})(DeleteNote);