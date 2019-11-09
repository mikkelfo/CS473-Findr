import React from 'react';
import {View, Text, StyleSheet, Image, TouchableNativeFeedback} from "react-native";
import Constants from 'expo-constants';
import IconFA from 'react-native-vector-icons/FontAwesome';

const Link = props => {
    return (
        <TouchableNativeFeedback
        onPress={() => alert("ok")}> // TODO: Add navigation
            <View style={styles.link}>
                <IconFA name={props.name} size={20} style="regular"/>
                <Text style={{fontSize: 18, marginLeft:10}}>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
};

const SideMenu = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.pb}/>
            <Link name="user-circle" title="Profile"/>
            <Link name="upload" title="Upload image"/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20 + Constants.statusBarHeight,
        marginLeft: 20,
    },
    pb: {
        width: 150,
        height: 150,

        borderRadius: 150/2,
        backgroundColor: "red",
        marginBottom: 30,
    },
    link: {
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 10,
    }
});

export default SideMenu;