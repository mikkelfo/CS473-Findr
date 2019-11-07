import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PictureRow from './PictureRow';
import Header from "./Header";


export default class MainScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Header/>
          <View style={styles.body}>
            <PictureRow title='Questions'/>
            <PictureRow title='Favorites'/>
            <PictureRow title='Matches'/>
          </View>
          <View style={styles.footer}>
            <View style={styles.circle}/>
            <View style={styles.circle}/>
            <View style={styles.circle}/>
          </View>
        </View>
    );
  }
}
const COLORS = {
  white: '#fff',
  black: '#000',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    alignSelf: 'stretch',
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
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
  }
});
