import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.welcomeImage}
            />
            <Text style={styles.logoText}>Tournament Viewer</Text>
          </View>
          <ScrollView style={styles.container}>
            <WebView
              source={{uri: 'http://player.twitch.tv/?channel=tvique'}}
              style={styles.stream}
            />
            <WebView
              source={{uri: 'http://player.twitch.tv/?channel=dreamkazper'}}
              style={styles.stream}
            />
          </ScrollView> 
        </View>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            Overwatch is a trademark of Blizzard Entertainment, Inc., in the U.S. and/or other countries.
          </Text>
        </View>

      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will run slightly slower but
          you have access to useful development tools. {learnMoreButton}.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  welcomeImage: {
    width: 240,
    height: 80,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 8,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  stream: {
    height: 150,
  },
});
