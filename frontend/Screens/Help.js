import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Header from "../Components/Header";
import IconFA from 'react-native-vector-icons/FontAwesome5';

export default class Help extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <View style={styles.body}>
                    <Text style={styles.header}>Actions</Text>
                        <Text>There's currently 3 actions available for you in the main screen (home), through either swiping the picture or pressing
                        a button on the action bar</Text>

                    <Text style={styles.subheader}>Pass</Text>
                        <Text>Swiping left or pressing the button marked with a <IconFA name="times"/> will pass the question,
                        and you will not see this question again</Text>

                    <Text style={styles.subheader}>Comment</Text>
                        <Text>Swiping up or pressing the button marked with a <IconFA name="comment-dots"/> will open a full
                        screen picture, so you can comment the question</Text>

                    <Text style={styles.subheader}>Favorite</Text>
                        <Text>Swiping up or pressing the button marked with a <IconFA name="heart"/> will open a full
                        screen picture, so you can comment the question</Text>

                    <Text style={styles.header}>Top menu</Text>
                        <Text>Bla</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    body: {
        alignSelf: 'stretch',
        margin: 10,
        marginHorizontal: 15,
    },
    header: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical:5,
        color: "black",
    },
    subheader: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold",
        color:"black",
    }
});