import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PictureRow from './Components/PictureRow';
import Header from "./Components/Header";
import ActionBar from "./Components/ActionBar"


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
          <ActionBar/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  body: {
    flex: 1,
    alignSelf: 'stretch',
  },

});
