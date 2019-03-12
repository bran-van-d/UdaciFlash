import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from './TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import DetailScreen from '../screens/DetailScreen';
import AddCardScreen from '../screens/AddCardScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  DeckDetail: DetailScreen,
  AddCard: AddCardScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Decks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-book'
      }
    />
  ),
};

const AddStack = createStackNavigator({
  Links: AddScreen,
});

AddStack.navigationOptions = {
  tabBarLabel: 'Add Deck',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-add'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AddStack,
});
