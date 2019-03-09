import { AsyncStorage } from 'react-native'
export const DECK_STORAGE_KEY = 'UdaciFlash:deck'

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 0
}

export function setDummyData() {
  const dummyData = [
    {
      id: getRandomNumber(555),
      name: 'Deck 1',
      cards: []
    },
    {
      id: getRandomNumber(999),
      name: 'Deck 2',
      cards: []
    },
  ]

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}
