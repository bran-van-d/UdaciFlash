import { RECEIVE_DECKS, ADD_DECKS } from '../actions';

function entries(state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECKS:
      return {
        ...state,
        ...action.deck
      }
    default:
      return state;
  }
}

export default entries;