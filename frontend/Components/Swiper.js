import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TouchableHighlight, View} from "react-native";

import CardStack, {Card} from 'react-native-card-stack-swiper';
import Constants from "expo-constants";
import {Circle} from "./ActionBar";

export default class Swiper extends Component {
    left(index) {
        console.log("Left: " + index)
    }
    right(index ) {
        console.log("Right: " + index)
    }
    up(index) {
        console.log("Up: " + index)
    }

    renderCards() {
        return photoCards.map((item) => {
            return(
                <Card style={[styles.card]} key={item.key}>
                    <View style={styles.textcontainer}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.description}>{item.key}</Text>
                    </View>
                </Card>
        )}
    )}
    render() {
        return(
            <View style={{flex:1, alignSelf: "stretch",}}>
                <CardStack
                    style={styles.container}
                    ref={swiper => {this.swiper = swiper }}
                    disableBottomSwipe={true}
                    onSwipedLeft={i => this.left(i)}
                    onSwipedRight={i => this.right(i)}
                    onSwipedTop={i => this.up(i)}
                    onSwipedAll={() => alert("Render more cards")}
                >
                    {this.renderCards()}
                </CardStack>
                <View style={styles.actionbar}>
                    <TouchableHighlight
                        onPress={() => this.swiper.swipeLeft()}>
                        <Circle icon="star"/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.swiper.swipeTop()}>
                        <Circle icon="star"/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.swiper.swipeRight()}>
                        <Circle icon="star"/>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        margin: 20,
    },
    card: {
        height: height - (Constants.statusBarHeight + 80 + 65 + 40 + 10),
        width: width - 40,
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
    },
    actionbar: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 25,
    },
    textcontainer: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 40,
        flex: 1,
    },
    description: {
        fontSize: 15,
        marginTop: 20,
    },
});

const photoCards = [
    {
        name: 'Austin Wade',
        age: 22,
        key: 'caseex6qfO4TPMYyhorner',
    },
    {
        name: 'Aleksander Borzenets',
        age: 28,
        key: 'ozda-XbeP0k',
    },
    {
        name: 'Don Delfin Espino',
        age: 29,
        key: 'nBywXevf_jE-',
    },
    {
        name: 'Eduardo Dutra',
        age: 30,
        key: 'ZHy0efLnzVc',
    },
    {
        name: 'Wesley Tingey',
        age: 21,
        key: 'TvPCUHten1o',
    },
    {
        name: 'Gift Habeshaw',
        age: 26,
        key: 'dlbiYGwEe9U',
    },
    {
        name: 'Henri Pham',
        age: 30,
        key: 'Ml4tr2WO7JE',
    },
    {
        name: 'Nico Marks',
        age: 24,
        key: 'mFcc5b_t74Q',
    },
    {
        name: 'Sirio',
        age: 28,
        key: "Ty4f_NOFO60'",
    },
    {
        name: 'Teymi Townsend',
        age: 30,
        key: "AvLHH8qYbAI'",
    },
    {
        name: 'Caique Silva',
        age: 20,
        key: "3ujVzg9i2EI'",
    },
    {
        name: 'David Yanutenama',
        age: 21,
        key: "5AoO7dBurMw'",
    },
];
