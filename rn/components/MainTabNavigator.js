// ./navigation/MainTabNavigator.js

// Import React and all necessary modules
import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

// Import screens
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import SettingsScreen from '../screens/SettingsScreen'

// Import TabBarIcon component
import TabBarIcon from '../components/TabBarIcon'

// Add stack for Home screen
const HomeStack = createStackNavigator({
  Home: HomeScreen // Specify component for each screen
})

// Add stack for About screen
const AboutStack = createStackNavigator({
  About: AboutScreen // Specify component for each screen
})

// Add stack for Settings screen
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen // Specify component for each screen
})

// Create and setup navigation item for Home screen
HomeStack.navigationOptions = {
  tabBarLabel: 'Home', // Text shown below the icon in tap bar
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home` : 'md-home'}
    />
  )
}

// Create and setup navigation item for Settings screen
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings', // Text shown below the icon in tap bar
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
}

// Create and setup navigation item for About screen
AboutStack.navigationOptions = {
  tabBarLabel: 'About', // Text shown below the icon in tap bar
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
    />
  )
}

// Export stacks for all app screens
export default createBottomTabNavigator({
  HomeStack,
  AboutStack,
  SettingsStack
})
