import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { editNote } from '../../actions';

// I am proud of writing this component and getting it working.
// I'd previously failed this project because of confusion on how
// state/props worked in React and Redux. Learning how to follow patterns
// and the importance of debugging was a major accomplishment for me and
// helped me realize that there was a chance for me in the tech industry.

const mapStateToProps = (state) => {
  return {
    notesArray: state
  }
}

class EditNote extends Component {
  constructor() {
    super();
    this.state = {
      matched: [],
    }
  }

  componentWillMount() {
    let routeId = this.props.match.params.id;
    let matched = this.props.notesArray.filter((item) => item._id === Number(routeId));
    this.setState({matched});
  }

  handleUpdate = () => {
    //action
    this.props.editNote(this.state.matched[0]);
    this.props.history.push('/');
  }

  handleChange = (event) => {
    console.log(event.target.name)
    let temp = Array.from(this.state.matched);
    temp[0][event.target.name] = event.target.value;
    this.setState({matched: temp })
  }

  render() {
    return (
      <div className='noteCard_container'>
        <div className='noteCard_topContent'>
          <div className="noteCard_header">
            <h3>Edit Note:</h3>
          </div> 
        </div>

        <div className='createNote_form'>
          <input 
            type='text'
            name ='title' 
            className='createNote_title'
            value={this.state.matched[0].title}
            onChange={this.handleChange} 
          />
          <textarea 
            className='createNote_textBody'
            name ='textBody'
            value={this.state.matched[0].textBody}
            onChange={this.handleChange} 
            rows='20'
          />
          <div className='button_link'>
            <div 
            className='nav_button createNote_button'
            onClick={this.handleUpdate}
            >Update</div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {editNote})(EditNote);
