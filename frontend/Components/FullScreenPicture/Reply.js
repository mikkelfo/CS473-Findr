import {StyleSheet, Text, View} from "react-native";
import React from "react";

const Reply = props => {
    return(
        <View style={comment.container}>
            <Text style={comment.user}>{props.username}</Text>
            <Text style={comment.comment}>{props.reply}</Text>
        </View>
    )
};

const comment = StyleSheet.create({
    container: {
        padding: 5,
        marginVertical: 5,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    user: {
        fontSize:13,
        fontWeight: "800",
    },
});

export default Reply;