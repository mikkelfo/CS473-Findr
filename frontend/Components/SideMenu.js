import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Constants from 'expo-constants';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';

const Link = props => {
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
            <View style={{alignItems:"center", justifyContent:"center"}}>
                <IconCom style={{marginBottom: 30}} name="account-circle-outline" size={100}/>
            </View>
            {/*<Link name="account-circle-outline" title="Profile" navigation={props.navigation}/>*/}
            <Link name="cloud-upload-outline" title="Upload image" nav="Upload" navigation={props.navigation}/>
            <Link name="bookmark-outline" title="Bookmarks" nav="Bookmark" navigation={props.navigation}/>
            <Link name="help-circle-outline" title="Help" nav="Help" navigation={props.navigation}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20 + Constants.statusBarHeight,
        marginLeft: 20,
    },
    pb: {
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