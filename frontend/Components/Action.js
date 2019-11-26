import React from "react";
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import IconFA from "react-native-vector-icons/FontAwesome";

export const CommentAction = props => {
    const [value, onChangeText] = React.useState("");
    return(
        <View style={action.container}>
            <TextInput
                autoFocus={props.autoFocus}
                style={action.inputStyle}
                autoCorrect={false}
                multiline
                value={value}
                onChangeText={text => onChangeText(text)}
                placeholder = {props.ph}
                placeholderTextColor = "rgba(0, 0, 0, 0.6)"
            />
            <TouchableOpacity onPress={() => props.add(value)}>
                <IconFA
                    name="arrow-circle-right"
                    color="rgba(0, 0, 0, 0.8)"
                    size={25}
                />
            </TouchableOpacity>
        </View>
    )
};

const action = StyleSheet.create({
    container: {
        padding: 5,
        marginVertical: 5,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        flexDirection: 'row',
        alignItems: "center",
    },
    inputStyle: {
        flex: 1,
    },
});
