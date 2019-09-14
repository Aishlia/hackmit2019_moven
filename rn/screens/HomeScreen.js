// ./screens/HomeScreen.js

// Import React, necessary UI modules from React native
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

// Add some simple styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0, 0, 0, .4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  welcomeText: {
    fontSize: 21,
    fontWeight: '700'
  }
})

// Create and export Home screen component
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null // disable app header
  }

  // Show notification about mode
  showDevelopmentModeWarning() {
    if (__DEV__) {
      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools.
        </Text>
      )
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome!</Text>
          </View>

          <View style={styles.getStartedContainer}>
            {this.showDevelopmentModeWarning()}
          </View>
        </ScrollView>
      </View>
    )
  }
}
