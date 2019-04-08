import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>
              You can do it
          </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f0',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  