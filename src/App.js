import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="Plassman Hall" checked={true} />
              Plassman Hall
      </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Swan" />
              Option 2
      </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option3" />
              Option 3
      </label>
          </div>
        </form>
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
