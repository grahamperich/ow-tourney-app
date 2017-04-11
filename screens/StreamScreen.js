import React from 'react';
import { View, ScrollView, StyleSheet, Text, WebView } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class StreamScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'exp.json',
    },
  };

  render() {
    return (
      <View>
        <ScrollView>
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
    );
  }
}

const styles = StyleSheet.create({
  stream: {
    height: 150,
  },
});
