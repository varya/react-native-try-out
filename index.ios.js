/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Redux = require('redux');

var Button = require('react-native-button');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Counter = React.createClass({
  render: function() {
    return (
      <View style={styles.counter}>
        <Text>I am here</Text>
        <Button onPress={this._handlePress}>Press me!</Button>
      </View>
    )
  },
  _handlePress(event) {
    alert('Pressed!');
  }
})

var reactNativeTryOut = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! XXX
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Counter/>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  counter: {
    backgroundColor: 'pink',
  }
});

AppRegistry.registerComponent('reactNativeTryOut', () => reactNativeTryOut);
