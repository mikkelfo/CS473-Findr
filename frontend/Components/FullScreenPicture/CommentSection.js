import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import {CommentAction} from "./Action";
import React, {Component} from "react";
import {Comment} from "./Comment";

export default class CommentSection extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [],
            refresh: false,
        };
        this.addComment = this.addComment.bind(this);
    }
    componentDidMount() {
        this.fetch(this.props.id)
    }

    async fetch(postID) {
        let comments = await fetch(`http://192.168.0.9:8088/api/v1/comment/getPostComment/${postID}`,
            {method: 'GET',})
            .then(response => response.json())
            .catch(e => console.log(e));
        this.setState({data: comments})
    }
    async addComment(content, postID) {
        await fetch(`http://192.168.0.9:8088/api/v1/comment/comment`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( {
                "username": "user2", //await fetch(`http://192.168.0.9:8088/api/v1/user/currentUser`)
                "content": content,
                "postID": postID
            })}
        );
        this.fetch(postID)
    }

    render() {
        return (
            <ScrollView style={styles.comments}>
                <Text style={styles.header}>Comments</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) =>
                        <Comment
                            username={item.username}
                            comment={item.content}
                            id={item.commentID}
                            upvote={item.upvote}
                        />}
                    keyExtractor={item => item.commentID.toString()}
                    extraData={this.state.data}
                />
                <CommentAction
                    update={this.update}
                    id={this.props.id}
                    add={this.addComment}
                    ph="Comment..."/>
                <View style={{height: 50}}/>
            </ScrollView>
        )
    }
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