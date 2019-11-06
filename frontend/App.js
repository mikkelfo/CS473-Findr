import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>
            Top bar
          </Text>
        </View>
        <View style={styles.body}>
          <Text>
            Body text 5
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.circle}>
          </View>
          <View style={styles.circle}>
          </View>
          <View style={styles.circle}>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  header: {
    height: 80,
    alignSelf: 'stretch',
    backgroundColor: "blue",
  },

  body: {
    flex: 1,
    alignSelf: 'stretch',
  },

  footer: {
    height: 80,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 25
  },

  circle: {
    backgroundColor: "white",
    height: 65,
    width: 65,
    borderRadius: 65/2,
    borderColor: "black",
    borderWidth: 0.1,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
  }
});
