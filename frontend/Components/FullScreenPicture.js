import React from 'react';
import {View, StyleSheet, Text, StatusBar, FlatList, ScrollView} from "react-native";

const comments = [
    {   username: "user1",
        comment: "I think it was bought from H&M",
        replies: [],
    }, {
        username: "user2",
        comment: "You can get it here",
        replies: [],
    },
    {   username: "user3",
        comment: "This is an example of a very long answer, that will probably require some text wrapping on additional lines",
        replies: [],
    }, {
        username: "user4",
        comment: "Short comment with a reply (?)",
        replies: [
            {   replyname: "reply1",
                replycomment: "I think this is a very interesting approach"
            }, {
                replyname: "reply2",
                replycomment: "This is the second reply to this very popular answer",
            }
        ],
    },
];

const Reply = props => {
    return(
        <View style={comment.container}>
            <Text style={comment.user}>{props.username}</Text>
            <Text style={comment.comment}>{props.reply}</Text>
        </View>
    )
};

const Comment = props => {
    return(
        <View style={comment.container}>
            <Text style={comment.user}>{props.username}</Text>
            <Text style={comment.comment}>{props.comment}</Text>
            <FlatList
                style={{marginTop: 5,}}
                data={props.replies}
                renderItem={({item}) => <Reply username={item.replyname} reply={item.replycomment}/>}
                keyExtractor={item => item.replyname}
            />
        </View>
    )
};

const comment = StyleSheet.create({
    container: {
        padding: 5,
        marginVertical: 5,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    user: {
        fontSize:13,
        fontWeight: "800",
    },
    comment: {

    },
});

const CommentSection = () => {
    return(
        <ScrollView style={styles.comments}>
            <Text style={styles.header}>Comments</Text>
            <FlatList
                style={{paddingBottom: 20,}}
                data={comments}
                renderItem={({item}) => <Comment username={item.username} comment={item.comment} replies={item.replies}/>}
                keyExtractor={item => item.username}
            >
            </FlatList>
        </ScrollView>
    )
};

const FullScreenPicture = props => {
    const { getParam } = props.navigation;
    const pic = getParam("styles");
    const src = getParam("src");
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={[pic, styles.background]}/>
            <View style={styles.textcontainer}>
                <Text style={styles.title}>{src}</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus est fugit nisi odit, officia quaerat quam quidem reprehenderit tempore.</Text>
            </View>
            <CommentSection/>
        </View>
    )
};

export default FullScreenPicture;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textcontainer: {
        flex: 1,
        padding: 20,
    },
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        padding: 20,
    },
    title: {
        fontSize: 40,
    },
    description: {
        fontSize: 15,
        marginTop: 20,
    },
    comments: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    header: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold",
    }
});