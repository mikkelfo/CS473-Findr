import React, {Component}from 'react';
import {StyleSheet, View} from "react-native";
import Header from "./Header";
import PictureRow from "./PictureRow";

export default class Bookmark extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <View style={styles.body}>
                    <PictureRow title='Questions'/>
                    <PictureRow title='Favorites'/>
                    <PictureRow title='Matches'/>
                </View>
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