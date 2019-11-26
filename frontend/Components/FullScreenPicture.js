import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View} from "react-native";

import CommentSection from "./CommentSection";

// TODO: User should be able to favorite a FullScreenPicture
export default class FullScreenPicture extends Component {
    constructor(props) {
        super(props);
        const {getParam} = this.props.navigation;
        const id = getParam("id");

        this.state = {
            isLoading: true,
            data: [],
            id: id,
        }

    }
    componentDidMount() {
        this.fetchPicture(this.state.id)
    }

    fetchPicture(postID) {
        fetch(`http://ec2-15-164-211-213.ap-northeast-2.compute.amazonaws.com:8088/api/v1/post/getPost/${postID}`,
            {method: 'GET',
            })
            .then(response => {return response.json()})
            .then(response => this.setState({data: response, isLoading: false}))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <View style={styles.background}/>
                <View style={styles.textcontainer}>
                    <Text style={styles.title}>{this.state.data.title}</Text>
                    <Text style={styles.description}>{this.state.data.description}</Text>
                </View>
                <CommentSection id = {this.state.id}/>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        backgroundColor: '#f97777',
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        padding: 20,
    },
    textcontainer: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 40,
    },
    description: {
        fontSize: 15,
        marginTop: 20,
    },
});