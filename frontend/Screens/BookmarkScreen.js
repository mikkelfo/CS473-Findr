import React, {Component}from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import Header from "../Components/Header";
import PictureRow from "../Components/PictureRow";

export default class BookmarkScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <ScrollView style={styles.body}>
                    <PictureRow
                        title='Questions'
                        navigation={this.props.navigation}/>
                    <PictureRow
                        title='Favorites'
                        navigation={this.props.navigation}/>
                    <PictureRow
                        title='Matches'
                        navigation={this.props.navigation}/>
                </ScrollView>
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
        marginHorizontal: 10,
    },
    body: {
        flex: 1,
        alignSelf: 'stretch',
    },

});