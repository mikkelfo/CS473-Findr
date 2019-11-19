import React from 'react';
import {StyleSheet, TouchableHighlight, View} from "react-native";
import IconFA from "react-native-vector-icons/FontAwesome";

const ActionBar = props => {
    return (
        <View style={styles.actionbar}>
            <TouchableHighlight
                onPress={() => alert(props.action)}>
                <Circle icon="skip"/>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => alert(props.action)}>
                <Circle icon="favorite"/>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => alert(props.action)}>
                <Circle icon="like"/>
            </TouchableHighlight>
        </View>
    )
};

const Circle = props => {
    return (
        <View style={styles.circle}>
            <View style={{height: 65, width: 65,alignItems: "center", justifyContent: "center"}}>
                <IconFA size={45} name={props.icon}/>
            </View>
        </View>
    )
};

export default ActionBar;
export {Circle};

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