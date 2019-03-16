# UdaciFlash

This *ANDROID* project allows a user to create decks of flash cards. The project opens with a deck view containing a few starter decks. The user has the option to create a new deck, add cards to new and existing decks and then take quizzes on their creations. The quiz itself allows the user the select if they got it right or wrong, so it's an application that expects a bit of honesty ;).

Users can also delete decks they no longer need. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Before starting this project, make sure you have the following technologies installed: 

[git](https://git-scm.com/)
[node](https://nodejs.org/en/)
[yarn](https://yarnpkg.com/en/) or use npm which came from install node
[expo-cli](https://expo.io/tools)
[android-studio](https://developer.android.com/studio)

### Installing

Clone the project, `git clone https://github.com/bran-van-d/UdaciFlash.git`

cd into the project directory, i.e `cd code-folder/UdaciFlash`

Use the `yarn` or `npm install` commmand to install the package dependencies

## Deployment

To run this project you will need to have an active development environment for the mobile project to run on. To set this up:
1. Open Android Studio 
2. Go Tools and select AVD Manager
3. Start the default device or create a new virutal device by using the 'Create Virutal Device' button in the bottom left. I developed this project on Pixel 2.

Next, open your terminal and 
1. cd into the project directory:
2. Type `expo start` in the terminal window
3. When the applicaton loads within the terminal window, you can hit the 'a' key to launch to project on the virtual device.
4. Once the project loads you can start making your changes in your editor. If you don't see the application live reloading you can hit CTRL+M while having the application in focus to open up  a variety of helpful menu options.

Happy coding!