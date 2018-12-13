import {DELETE_NOTE, EDIT_NOTE, CREATE_NOTE} from '../actions/index.js';

const initialState = [
  {
    _id: 1544733808032344,
    title: 'First Note',
    textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed ipsum quis velit dictum tristique in ac nisi.',
    createdAt: 1544705687436,
  },
  {
    _id: 1544733808032453,
    title: 'Second Note',
    textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed ipsum quis velit dictum tristique in ac nisi.',
    createdAt: 1544705687437
  },
  {
    _id: 15447338080325624,
    title: 'Third Note',
    textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed ipsum quis velit dictum tristique in ac nisi.',
    createdAt: 1544705687438
  },
  {
    _id: 154473380803297697,
    title: 'Fourth Note',
    textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed ipsum quis velit dictum tristique in ac nisi.',
    createdAt: 1544705687438
  },
  {
    _id: 15447338080327443,
    title: 'Fifth Note',
    textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed ipsum quis velit dictum tristique in ac nisi.',
    createdAt: 1544705687438
  },

];

//                    Current Application State, {action object}
const notesReducer = (state = initialState, action) => {
  let temp = Array.from(state);

  switch (action.type){
    case DELETE_NOTE:
      state.forEach((item, index) => {
        if(item._id === action.payload) {
          temp.splice(index, 1);
          return;
        }
      });
      return temp;
    
    case EDIT_NOTE:
      state.forEach((item, index) => {
        if(item._id === action.payload._id) {
          temp.splice(index, 1);
          return;
        }
      });
      temp.push(action.payload);
      return temp;
    
    case CREATE_NOTE:
      temp.push(action.payload);
      return temp;

      default:
    //Returns: the next application state
      return state;
  } 
};

export default notesReducer;