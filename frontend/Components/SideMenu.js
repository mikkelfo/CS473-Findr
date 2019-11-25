import React from 'react';
import {View, Text, StyleSheet, Image, TouchableNativeFeedback,TouchableOpacity} from "react-native";
import Constants from 'expo-constants';
//import IconFA from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';

const Link = props => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate(props.nav)}>
            <View style={styles.link}>
                <Icon5 name={props.name} size={20} style="regular"/>
                <Text style={{fontSize: 18, marginLeft:10}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const Link1 = props => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate(props.nav)}>
            <View style={styles.link}>
                <IconCom name={props.name} size={20} style="regular"/>
                <Text style={{fontSize: 18, marginLeft:10}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const SideMenu = props => {
    return(
        <View style={styles.container}>
            <Image style={styles.pb}/>
            <Link1 name="account-circle-outline" title="Profile" navigation={props.navigation}/>
            <Link1 name="cloud-upload-outline" title="Upload image"  nav="Upload" navigation={props.navigation}/>
            <Link1 name="bookmark-outline" title="Bookmarks" nav="Bookmark" navigation={props.navigation}/>
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