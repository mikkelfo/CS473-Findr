import React, {Component}from 'react';
import {StyleSheet, View} from "react-native";
import Header from "./Header";
import ActionBar from "./ActionBar";

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <View style={{flex:1, backgroundColor:"grey", alignSelf:'stretch', margin:20}}>
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