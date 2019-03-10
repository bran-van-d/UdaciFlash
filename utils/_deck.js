import { AsyncStorage } from 'react-native'
export const DECK_STORAGE_KEY = 'UdaciFlash:deck'

export function setDummyData() {
  const dummyData = [
    {
      id: 1,
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
      id: 2,
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
