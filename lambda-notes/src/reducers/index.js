import {DELETE_NOTE, EDIT_NOTE, CREATE_NOTE} from '../actions/index.js';

const initialState = [
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