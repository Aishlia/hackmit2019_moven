import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    SafeAreaView,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native';

const DATA = [
   {
        "friends": [
          "David Bauer"
        ],
        "id": 1,
        "name": "egg1",
        "price": "1.03"
      },
      {
        "friends": [
          "Matt Oakley"
        ],
        "id": 2,
        "name": "egg2",
        "price": "1.03"
      },
      {
        "friends": [
          "Matt Oakley"
        ],
        "id": 3,
        "name": "egg3",
        "price": "1.03"
      },
      {
        "friends": [],
        "id": 4,
        "name": "egg4",
        "price": "1.03"
      },
      {
        "friends": [],
        "id": 5,
        "name": "Tax",
        "price": "4.00"
      },
      {
        "friends": [],
        "id": 6,
        "name": "Subtotal",
        "price": "20.00"
      }
 ]

 function Item({ data }) {
   return (
     <View style={styles.item}>
       <Text style={styles.title}>{data.name}</Text>
       <Text style={styles.title}>{data.price}</Text>
       <Text style={styles.title}>{data.friends}</Text>
     </View>
   );
 }

export default class HomeScreen extends React.Component{
    state = {};

    render() {
      return (
        <View>
          <DevelopmentModeNotice />
          <FlatList
            contentContainerStyle={{margin:3}}
            horizontal={false}
            data={DATA}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      )

    };
}

HomeScreen.navigationOptions = {
    header: null,
};

function DevelopmentModeNotice() {
    if (__DEV__) {
        const refreshButton = (
            <Text onPress={handleRefreshPress} style={styles.topcontainer}>
            Refresh
            </Text>
        );

        return (
            <Text style={styles.developmentModeText}>
            {refreshButton}
            </Text>
        );
    } else {
        return (
            <Text style={styles.developmentModeText}>
            Error with refresh
            </Text>
        );
    }
}

function handleRefreshPress() {
    this.state = [{
        "friends": [
          "David Bauer"
        ],
        "id": 1,
        "name": "egg1",
        "price": "1.03"
      },
      {
        "friends": [
          "Matt Oakley"
        ],
        "id": 2,
        "name": "egg2",
        "price": "1.03"
      },
      {
        "friends": [
          "Matt Oakley"
        ],
        "id": 3,
        "name": "egg3",
        "price": "1.03"
      },
      {
        "friends": [],
        "id": 4,
        "name": "egg4",
        "price": "1.03"
      },
      {
        "friends": [],
        "id": 5,
        "name": "Tax",
        "price": "4.00"
      },
      {
        "friends": [],
        "id": 6,
        "name": "Subtotal",
        "price": "20.00"
      }];
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    topcontainer: {
      height: 60,
      textAlign: 'left',
      fontSize: 14,
      color: '#2e78b7',
    },
    item: {
      flexDirection: 'row',
    },
    title: {
      width: Dimensions.get('window').width/3,
      fontSize: 20,
    },
});
