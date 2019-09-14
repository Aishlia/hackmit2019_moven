// ./App.js

// Import React and necessary UI modules
import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

// Import main navigation
import AppNavigator from './navigation/AppNavigator'

// Add some simple styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

// Create and export the main App component
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* If app is running on iOS, show default status bar */}
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

        {/* Show main app tap bar */}
        <AppNavigator />
      </View>
    )
  }
}
