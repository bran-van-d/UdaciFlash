import { AsyncStorage } from 'react-native'
export const DECK_STORAGE_KEY = 'UdaciFlash:deck'

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 0
}

export function setDummyData() {
  const dummyData = [
    {
      id: getRandomNumber(555),
      name: 'Addition Deck',
      cards: [
        {
          id: 1,
          question: '2 + 2 ',
          answer: '4'
        },
        {
          id: 2,
          question: '2 + 10 ',
          answer: '12'
        }
      ]
    },
    {
      id: getRandomNumber(999),
      name: 'Multiplication Deck',
      cards: [
        {
          id: 1,
          question: '11 x 3 ',
          answer: '33'
        },
        {
          id: 2,
          question: '7 x 3 ',
          answer: '21'
        }
      ]
    },
  ]

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}
