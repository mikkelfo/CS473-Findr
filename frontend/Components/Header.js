import React, {Component} from "react";
import {StyleSheet, View, TouchableOpacity } from "react-native";
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconO from 'react-native-vector-icons/Octicons';

class Header extends Component {

    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity>
                    <IconFA name="user-circle" size={65}/>
                </TouchableOpacity >
                <TouchableOpacity>
                    <IconFA name="bookmark" size={65}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <IconO name="flame" size={65}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        height: 80,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 25
    },
});

export default Header;