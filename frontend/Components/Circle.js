import React from 'react';
import {StyleSheet, View} from "react-native";
import IconFA from 'react-native-vector-icons/FontAwesome5';

const Circle = props => {
    return (
        <View style={styles.circle}>
            <View style={{height: 65, width: 65,alignItems: "center", justifyContent: "center"}}>
                <IconFA size={45} name={props.icon} regular/>
            </View>
        </View>
    )
};

export {Circle};

const styles = StyleSheet.create({
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