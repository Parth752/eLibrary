import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class TransactionScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Transaction Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#FFFF",
    fontSize: 30,
  },
});
