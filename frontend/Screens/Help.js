import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import Header from "../Components/Header";
import IconFA from 'react-native-vector-icons/FontAwesome5';

export default class Help extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation}/>
                <ScrollView style={styles.body}>
                    <Text style={styles.header}>Navigation</Text>
                        <Text>Utilizing the top bar, consisting of 3 icons, let's you navigate through the app</Text>

                        <Text style={styles.subheader}>Personalized</Text>
                            <Text>The personalized tab, pictured with a user circle <IconFA name="user-circle"/>, is where you'll find
                            features directly related to you. This includes your bookmarks, uploading an image and this help tab.The bookmark page allows you to quickly access your history, by providing your own posts, your favorites
                            and your commented posts (called matches). If you prefer a vertical list, rather than the default horizontal,
                            simply clicking on the title will transform it into a vertical 3xN grid</Text>

                        <Text style={styles.subheader}>Home</Text>
                            <Text>The home page, pictured with a home <IconFA name="home"/>, is where all the magic happens. This is where
                            you're able to explore pictures uploaded by other people and pass, favorite or comment these</Text>

                        <Text style={styles.subheader}>Discovery</Text>
                            <Text>If you ever get tired of swiping, the discovery page, pictured with a compass <IconFA name="compass"/>,
                            let's you quickly exploring trending and popular posts, for quick inspiration and browsing</Text>

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
                </ScrollView>
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
        marginTop: 10,
    },
    subheader: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold",
        color:"black",
    }
});