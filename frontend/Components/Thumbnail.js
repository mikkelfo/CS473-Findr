import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

const Thumbnail = props => {
    return (
        <TouchableOpacity onPress={() => selectPicture(props)}>
            <View style={props.style}>
                <Text style={{justifyContent: "center", alignItems: "center",}}>{props.src}</Text>
            </View>
        </TouchableOpacity>
    );
};

function selectPicture(props) {
    props.navigation.navigate("FullPic", {
        src: props.src,
    });
}

export default Thumbnail;