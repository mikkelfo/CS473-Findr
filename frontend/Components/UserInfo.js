import {StyleSheet, Text, View} from "react-native";
import React from "react";
import IconFA from "react-native-vector-icons/FontAwesome";

// TODO: Add reputation fetch (from db)
// fetchRep(Username) -> Reputation
// fetchAvatar(Username) -> Avatar
const UserInfo = props => {
    const rep = 10;
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <IconFA name="user-circle" size={50}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.props, {textAlign: "right"}]}>{props.username}</Text>
                <Text style={{marginHorizontal: 5}}>|</Text>
                <Text style={[styles.props, {textAlign: "left"}]}>{rep}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: 200,

    },
    avatar: {
        alignItems: 'center',
        marginTop: -10
    },
    textContainer: {
        flexDirection: 'row',
    },
    props: {
        flex: 1,
    }

});

export default UserInfo;