import {StyleSheet, Text, View} from "react-native";
import React from "react";
import IconFA from "react-native-vector-icons/FontAwesome";

const UserInfo = props => {
    const encodedValue = encodeURIComponent(props.username);
    const [reputation, onChange] = React.useState(-1);
    fetch(`http://ec2-15-164-96-242.ap-northeast-2.compute.amazonaws.com:8088/api/v1/user/getUserInfo/${encodedValue}`,
        {method: 'GET',
        })
        .then(r => {return r.json()})
        .then(r => onChange(r.reputation))
        .catch(e => console.log(e));

    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <IconFA name="user-circle" size={50}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.props, {textAlign: "right"}]}>{props.username}</Text>
                <Text style={{marginHorizontal: 5}}>|</Text>
                <Text style={[styles.props, {textAlign: "left"}]}>{reputation}</Text>
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