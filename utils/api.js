import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './_deck'

export function addDeckToStorage({ entry, key }) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeDeck(key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key-1] = undefined
      const updatedData = data.filter((dt) => dt != undefined)
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(updatedData))
    })
}

export function addCard(deckId) {
  //TODO:  add card to cards array from deck id
}

