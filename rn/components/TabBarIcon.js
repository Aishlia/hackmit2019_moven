// ./components/TabBarIcon.js

// Import React and 'Icon' module from 'Expo'
import React from 'react'
import { Icon } from 'expo'

// Import color constants
import Colors from '../constants/Colors'

// Create, and export, component for navigation icon
export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    )
  }
}
