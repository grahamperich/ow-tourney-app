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
import id from '../constants/ClientId';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: [],
    } 
  }

  static route = {
    navigationBar: {
      visible: false,
    },
  };

  componentWillMount() {
    // make http request and populate state.streams with objects which contain
    // the stream title, the stream URI, and (hopefully) a boolean of whether the 
    // stream is currently live

    // for now, populate dummy data:
    const dreamkazper = {
      name: 'DreamKazper',
      id: 68624555,
      uri: 'http://player.twitch.tv/?channel=dreamkazper'
    };
    const tviq = {
      id: 27728003,
      uri: 'http://player.twitch.tv/?channel=tvique'
    };

    // we're not going to invoke Array.prototype.push() on  this.state.streams directly because
    // in React we should treat this.state as if it were immutable. We should always use
    // this.setState() to mutate it

    let arrCopy = this.state.streams.slice();
    arrCopy.push(dreamkazper, tviq)

    this.setState({streams: arrCopy});
  }


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

            {this.state.streams.map(stream => (
              <View>
                <Text style={styles.streamText}>{stream.name || 'N/A'}</Text>
                <WebView
                  source={{uri: stream.uri}}
                  style={styles.stream}
                />
              </View>
            ))}

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
  streamText: {
    color: 'rgba(96,100,109, 1)',
    alignItems: 'center',
    fontSize: 13
  }
});
