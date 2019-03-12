import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD } from '../actions';

function decks(state = [], action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case DELETE_DECK: {
      const deckId = action.deckId;

      return Object.values(state).filter((deck) => deck.name !== deckId)
    }
    case ADD_CARD: {
      const { deckId, cardInfo } = action;

      debugger;

      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          cards: state[deckId].cards.concat(cardInfo),
        }
      }

    }
    default:
      return state;
  }
}

export default decks;