import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import Header from "../Components/Header";
import Swiper from "../Components/Swiper";

export default class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <Swiper navigation={this.props.navigation}/>
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