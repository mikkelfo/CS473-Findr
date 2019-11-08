import React from 'react';
import {View, StyleSheet, TouchableHighlight} from "react-native";

const ActionBar = () => {
    return (
        <View style={styles.actionbar}>
            <Circle style={styles.circle} action="skip"/>
            <Circle style={styles.circle} action="favorite"/>
            <Circle style={styles.circle} action="like"/>
        </View>
    )
};

const Circle = props => {
    return (
        <TouchableHighlight
            onPress={() => alert(props.action)}>
            <View style={styles.circle}/>
        </TouchableHighlight>
    )
};

export default ActionBar;

const styles = StyleSheet.create({
    actionbar: {
        height: 80,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 25,
    },

    circle: {
        backgroundColor: "white",
        height: 65,
        width: 65,
        borderRadius: 65/2,
        borderColor: "black",
        borderWidth: 0.1,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    }
});