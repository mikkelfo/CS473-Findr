import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

const Thumbnail = props => {
    return (
        <TouchableOpacity onPress={() => selectPicture(props)}>
            <View style={[props.style, {alignItems:"center", justifyContent:"center"}]}>
                <Text>{props.id}</Text>
            </View>
        </TouchableOpacity>
    );
};

function selectPicture(props) {
    props.navigation.navigate("FullPic", {
        id: props.id,
    });
}

export default Thumbnail;