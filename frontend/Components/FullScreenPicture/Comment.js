// TODO: Hook this up to props attribute OP_picked, line 167
import React, {Component} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Reply from "./Reply";
import IconFA from 'react-native-vector-icons/FontAwesome';
import {CommentAction} from "./Action";
import {UserOverlay} from "./UserOverlay";

export class Comment extends Component {
    constructor (props) {
        super(props);
        this.state = {
            upvotes: 1,
            isUpvoted: false,
            isDownvoted: false,
            isPicked: false,
            isVisible: false,
            reply: false,
        };
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.addReply = this.addReply.bind(this);
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
    }
    upvote() {
        if (this.state.isUpvoted) {             // cancel upvote
            this.setState({
                upvotes: this.state.upvotes - 1,
                isUpvoted: false,
            })
        } else if (this.state.isDownvoted) {    // cancel downvote, upvote
            this.setState({
                upvotes: this.state.upvotes + 2,
                isUpvoted: true,
                isDownvoted: false,
            })
        } else {                                // upvote
            this.setState({
                upvotes: this.state.upvotes + 1,
                isUpvoted: true,
            })
        }
    }
    downvote() {
        if (this.state.isDownvoted) {           // cancel downvote
            this.setState({
                upvotes: this.state.upvotes + 1,
                isDownvoted: false,
            })
        } else if (this.state.isUpvoted) {      // cancel upvote, downvote
            this.setState({
                upvotes: this.state.upvotes - 2,
                isUpvoted: false,
                isDownvoted: true,
            })
        } else {                                // downvote
            this.setState({
                upvotes: this.state.upvotes - 1,
                isDownvoted: true,
            })
        }
    }

    toggleOverlay() {
        this.setState({ isVisible: !this.state.isVisible })
    }
    addReply(value) {
        this.setState({reply: !this.state.reply});
        alert(value)
    }

    render() {
        const COLORS = {
            neutral: "black",
            active: "red"

        };

        return (
            <View style={comment.container}>
                <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                    <TouchableOpacity
                        onPress={() => this.setState({ isVisible: true })}>
                        <Text style={comment.user}>{this.props.username}</Text>
                    </TouchableOpacity>

                    <View style={{marginHorizontal: 10, flexDirection: "row", alignItems: "center"}}>

                        <TouchableOpacity
                            onPress={() => this.upvote()}>
                            <IconFA name="arrow-up" size={15} color={this.state.isUpvoted ? COLORS.active : COLORS.neutral}/>
                        </TouchableOpacity>

                        <Text style={{marginHorizontal: 2}}>{this.state.upvotes}</Text>

                        <TouchableOpacity
                            onPress={() => this.downvote()}>
                            <IconFA name="arrow-down" size={15} color={this.state.isDownvoted ? COLORS.active : COLORS.neutral}/>
                        </TouchableOpacity>

                    </View>

                    {this.state.isPicked && <IconFA name="check" color="green" size={15}/>}
                </View>
                <Text style={comment.comment}>{this.props.comment}</Text>

                <View style={actions.container}>
                    <TouchableOpacity
                        onPress={() => this.setState({reply: !this.state.reply})}>
                        <Text style={actions.text}>reply</Text>
                    </TouchableOpacity>

                    <Text style={actions.divider}>|</Text>

                    <TouchableOpacity
                        onPress={() => alert("This comment has been reported")}>
                        <Text style={actions.text}>report</Text>
                    </TouchableOpacity>
                </View>

                {this.state.reply && <CommentAction add = {this.addReply} autoFocus={true} ph = "Reply..."/>}

                <FlatList
                    style={{marginTop: 5,}}
                    data={this.props.replies}
                    renderItem={({item}) => <Reply username={item.replyname} reply={item.replycomment}/>}
                    keyExtractor={item => item.replyname}
                />
                <UserOverlay
                    visible = {this.state.isVisible}
                    username={this.props.username}
                    toggle={this.toggleOverlay}
                />
            </View>
        )
    }
}

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
});

const actions = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    text: {
        color: "#333",
        marginHorizontal: 2,
        fontSize: 12,
    },
    divider: {
        color: "#333",
        marginHorizontal: 2,
        fontSize: 10,
        marginTop: 1,
    }
});
