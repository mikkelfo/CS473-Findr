import React from 'react';
import {View, StyleSheet, Text, StatusBar} from "react-native";

const CommentSection = () => {
    return(
        <View style={styles.comments}>
            <Text>Comments</Text>
        </View>
    )
};

const FullScreenPicture = props => {
    const { getParam } = props.navigation;
    const pic = getParam("styles");
    const src = getParam("src");
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={[pic, styles.background]}>
                <View style={{flex:1}}>
                    <Text style={styles.title}>{src}</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus est fugit nisi odit, officia quaerat quam quidem reprehenderit tempore.</Text>
                </View>
                <CommentSection/>
            </View>
        </View>
    )
};

export default FullScreenPicture;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        height: "100%",
        width: "100%",
        padding: 20,
    },
    title: {
        fontSize: 40,
    },
    description: {
        fontSize: 15,
        marginTop: 20,
    },
    comments: {
        flex: 1,
    }
});