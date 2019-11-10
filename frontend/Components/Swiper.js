import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableNativeFeedback} from "react-native";

import CardStack, { Card } from 'react-native-card-stack-swiper';

export default class Swiper extends Component {
    render() {
        return(
            <CardStack
                style={styles.container}
                ref={swiper => { this.swiper = swiper }}
                loop={true}
            >
                <Card style={[styles.card]}><Text style={styles.text}>A</Text></Card>
                <Card style={[styles.card]}><Text style={styles.text}>B</Text></Card>
                <Card style={[styles.card]}><Text style={styles.text}>C</Text></Card>
            </CardStack>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        alignSelf:'stretch',
        margin:20,
    },
    card: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white",
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    }
});
