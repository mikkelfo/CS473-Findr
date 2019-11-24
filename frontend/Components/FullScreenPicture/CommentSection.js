import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import {CommentAction} from "./Action";
import React, {Component} from "react";
import {Comment} from "./Comment";

export default class CommentSection extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        this.fetch()
    }

    async fetch() {
        let comments = await fetch(`http://192.168.0.9:8088/api/v1/comment/getPostComment/${this.props.id}`,
            {method: 'GET',})
            .then(response => response.json())
            .catch(e => console.log(e));
        this.setState({data: comments})
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
                        />}
                    keyExtractor={item => item.commentID.toString()}
                />
                <CommentAction ph="Comment..."/>
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