import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DeleteNote from '../DeleteNote/DeleteNote.js';
import './index.css';

const mapStateToProps = (state) => {
  return {
    notesArray: state
  }
}

class NoteCard extends Component {
  constructor() {
    super()
    this.state = {
      showDelete: false,
      matched: [],
    }
  }

  componentWillMount() {
    console.log('state log', this.state)
    let routeId = this.props.match.params.id;
    console.log('route id',typeof routeId)
    let matched = this.props.notesArray.filter((item) => item._id === Number(routeId));
    //console.log('Matched', matched)
    this.setState({matched})
    //console.log('state log 2', this.state)
  }

  showModal = () => {
    this.setState({showDelete: !this.state.showDelete})
  } //toggle/flip, reverses true/false


  render() {
    console.log('noteview', this.props)
    console.log('state log render', this.state)
    return (
      <div className='noteCard_container'>
      <div className='noteCard_topContent'>
        <div className="noteCard_header">
          <h3>{this.state.matched[0].title}:</h3>
        </div> 
        <div>
          <Link to={`/edit/${this.props.match.params.id}`} className='edit_delete unstyled_link'>edit</Link>
          <a 
            href='#' 
            className='edit_delete'
            onClick={this.showModal}
          >delete</a>
        </div>
      </div>
        <div className='notes_list'>
          <p className="">{this.state.matched[0].textBody}</p>
        </div>
        <DeleteNote 
          toggle={this.state.showDelete}
          updateParent={this.showModal}
          toDelete={this.state.matched[0]._id}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, {/*actions*/})(NoteCard);