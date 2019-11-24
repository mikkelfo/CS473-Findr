import React from 'react';
import {StatusBar, StyleSheet, Text, View} from "react-native";

import {CommentSection} from "./CommentSection";

// TODO: User should be able to favorite a FullScreenPicture
const FullScreenPicture = props => {
    const { getParam } = props.navigation;
    const pic = getParam("styles");
    const src = getParam("src");
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={[pic, styles.background]}/>
            <View style={styles.textcontainer}>
                <Text style={styles.title}>{src}</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus est fugit nisi odit, officia quaerat quam quidem reprehenderit tempore.</Text>
            </View>
            <CommentSection/>
        </View>
    )
};

export default FullScreenPicture;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        backgroundColor: '#f97777',
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        padding: 20,
    },
    textcontainer: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 40,
    },
    description: {
        fontSize: 15,
        marginTop: 20,
    },
});