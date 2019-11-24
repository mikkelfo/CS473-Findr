import React from 'react';
import {View, Text, StyleSheet, Image, TouchableNativeFeedback, TouchableOpacity} from "react-native";
import Constants from 'expo-constants';
import IconFA from 'react-native-vector-icons/FontAwesome';

const Link = props => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate(props.nav)}>
            <View style={styles.link}>
                <IconFA name={props.name} size={20} style="regular"/>
                <Text style={{fontSize: 18, marginLeft:10}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const SideMenu = props => {
    return(
        <View style={styles.container}>
            <Image style={styles.pb}/>
            <Link name="user-circle" title="Profile" navigation={props.navigation}/>
            <Link name="upload" title="Upload image" navigation={props.navigation}/>
            <Link name="bookmark" title="Bookmarks" nav="Bookmark" navigation={props.navigation}/>
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