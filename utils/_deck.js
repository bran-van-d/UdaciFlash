import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const DECK_STORAGE_KEY = 'UdaciFlash:deck'
const NOTIFICATION_KEY = 'UdaciFlash:notifications'

export async function setDummyData() {
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

export async function setData() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}


function createNotification() {
  return {
    title: 'Your brain calls.',
    body: "Don't forget to do at least one flash card set!",

    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
