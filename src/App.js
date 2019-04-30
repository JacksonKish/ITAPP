import React from 'react'
import HomeScreen from './HomeScreen'
import QuestionPage from './QuestionPage'
import { createStackNavigator, createAppContainer } from "react-navigation";

const stackNav = createStackNavigator({
  Home: {
    screen: HomeScreen
  }, 
  Question: {
    screen: QuestionPage
  }
})

const Navigator = createAppContainer(stackNav)

export default () => (
  <Navigator />
)
