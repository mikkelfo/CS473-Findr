import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import {CommentAction} from "./Action";
import React from "react";
import {Comment} from "./Comment";

export const CommentSection = () => {
    return(
        <ScrollView style={styles.comments}>
            <Text style={styles.header}>Comments</Text>
            <FlatList
                data={comments}
                renderItem={({item}) => <Comment username={item.username} comment={item.comment} replies={item.replies}/>}
                keyExtractor={item => item.username}
            />
            <CommentAction ph="Comment..."/>
            <View style={{height:50}}/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
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