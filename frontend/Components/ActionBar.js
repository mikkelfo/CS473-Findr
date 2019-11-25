import React from 'react';
import {StyleSheet, TouchableHighlight, View} from "react-native";
//import IconFA from "react-native-vector-icons/FontAwesome";
import IconFA from 'react-native-vector-icons/FontAwesome5';

const ActionBar = props => {
    return (
        <View style={styles.actionbar}>
            <TouchableHighlight
                onPress={() => alert(props.action)}>
                <Circle icon="skip"/>
            </TouchableHighlight>
            <TouchableHighlight
            underlayColor='none'
                onPress={() => alert(props.action)}>
                <Circle icon="favorite"/>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor='none'
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
                <IconFA size={45} name={props.icon} regular/>
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
        backgroundColor:"white",
        height: 65,
        width: 65,
        borderRadius: 65/2,
        borderColor: "black",
        borderWidth: 0.1,
        shadowColor: 'rgba(255, 186, 0,0.7)',
        shadowOffset: { width: -3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 10,
    }
});