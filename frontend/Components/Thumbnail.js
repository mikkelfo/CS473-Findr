import React from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

const Thumbnail = props => {
    return (
        <TouchableOpacity onPress={() => selectPicture(props, styles.pic)}>
            <View style={styles.pic}>
                <Text style={{justifyContent: "center", alignItems: "center",}}>{props.src}</Text>
            </View>
        </TouchableOpacity>
    );
};

function selectPicture(props, styles) {
    props.navigation.navigate("FullPic", {
        styles: styles,
        src: props.src,
    });
}

const styles = StyleSheet.create({
    pic: {
        backgroundColor: '#f97777',
        width: 100,
        height: 100,
        borderRadius: 3,
        marginRight: 20,
        marginBottom: 20,

    },
});

export default Thumbnail;