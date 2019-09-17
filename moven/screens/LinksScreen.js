import React from 'react';
import {Image} from 'react-native';
// import { ScrollView, StyleSheet } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Constants } from 'expo';
//import {moveAsync, documentDirectory} from 'expo-file-system';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    ratio: '16:9',
    ratios: [],
    type: 'back',
  };

async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

getRatios = async () => {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  };

 takePicture = async () => {
    if (this.camera) {
      //const photo = await this.camera.takePictureAsync({base64: true});
      //this.onPictureSaved(photo);
    }
  };

onPictureSaved = async photo => {
    this.setState({photo})
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if (this.state.photo) {
        return <Image source={{uri: this.state.photo.uri}}></Image>;
    } else {
      return (
        <View style={{ flex: 1 , textAlign: 'center'}}>
          <Camera
          ref={ref => {
             this.camera = ref;
             }}
          style={{ flex: 1 }}
          type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                textAlign: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  textAlign: 'center',
                }}
          onPress={this.takePicture}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white', textAlign:'center' }}> Take Pic </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

// export default function LinksScreen() {
//   return (
//     <ScrollView style={styles.container}>
//       {/**
//        * Go ahead and delete ExpoLinksView and replace it with your content;
//        * we just wanted to provide you with some helpful links.
//        */}
//       <ExpoLinksView />
//     </ScrollView>
//   );
// }
//
// LinksScreen.navigationOptions = {
//   title: 'Split Receipt',
// };
//
//const styles = StyleSheet.create({
//});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  noPermissions: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    padding: 10,
  },
  newPhotosDot: {
    position: 'absolute',
    top: 0,
    right: -5,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4630EB'
  },
});
