// ./constants/Layout.js

// Import 'Dimensions' module from 'react-native'
import { Dimensions } from 'react-native'

// Create constants for app width and height
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

// Export everything
export default {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375
}
