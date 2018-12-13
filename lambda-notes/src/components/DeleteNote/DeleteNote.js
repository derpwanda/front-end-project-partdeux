import React, { Component } from 'react';
import './index.css';

class DeleteNote extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  componentWillMount() {

  }

  render() {
    let toggle = this.props.toggle;
    return (
      <div className={ toggle ? 'delete_modal' : 'hidden'}>
        <div>
          <h4>Are you sure you want to delete this?</h4>
        </div>
        <div className='modal_button_container'>
          <div 
            className='modal_button modal_button--delete'
            onClick={this.props.updateParent}
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

export default DeleteNote;