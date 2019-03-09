import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY, formatCalendarResults } from './_deck'

export function fetchCalendarResults() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(formatCalendarResults)
}

export function addDeck({ entry, key }) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeDeck(key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}

export function addCard(deckId) {
  //TODO:  add card to cards array from deck id
}

