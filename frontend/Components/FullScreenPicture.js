import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    FlatList,
    ScrollView,
    TouchableOpacity
} from "react-native";
import IconFA from 'react-native-vector-icons/FontAwesome';

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
const COLORS = {
    neutral: "black",
    active: "red"
};
class Comment extends Component {
    constructor (props) {
        super(props);
        this.state = {
            upvotes: 1,
            isUpvoted: false,
            isDownvoted: false,
        }
    }
    upvote() {
        if (this.state.isUpvoted) {             // cancel upvote
            this.setState({
                upvotes: this.state.upvotes - 1,
                isUpvoted: false,
                upvoteColor: COLORS.neutral
            })
        } else if (this.state.isDownvoted) {    // cancel downvote, upvote
            this.setState({
                upvotes: this.state.upvotes + 2,
                isUpvoted: true,
                isDownvoted: false,
                upvoteColor: COLORS.active,
                downvoteColor: COLORS.neutral
            })
        } else {                                // upvote
            this.setState({
                upvotes: this.state.upvotes + 1,
                isUpvoted: true,
                upvoteColor: COLORS.active
            })
        }
    }
    downvote() {
        if (this.state.isDownvoted) {           // cancel downvote
            this.setState({
                upvotes: this.state.upvotes + 1,
                isDownvoted: false,
                downvoteColor: COLORS.neutral,
            })
        } else if (this.state.isUpvoted) {      // cancel upvote, downvote
            this.setState({
                upvotes: this.state.upvotes - 2,
                isUpvoted: false,
                isDownvoted: true,
                upvoteColor: COLORS.neutral,
                downvoteColor: COLORS.active,
            })
        } else {                                // downvote
            this.setState({
                upvotes: this.state.upvotes - 1,
                isDownvoted: true,
                downvoteColor: COLORS.active,
            })
        }
    }

    render() {
        return (
            <View style={comment.container}>
                <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                    <Text style={comment.user}>{this.props.username}</Text>
                    <View style={{marginLeft: 10, flexDirection: "row", alignItems: "center"}}>

                        <TouchableOpacity
                            onPress={() => this.upvote()}>
                            <IconFA
                                name="arrow-up"
                                size={15}
                                color={this.state.upvoteColor}/>
                        </TouchableOpacity>

                        <Text style={{marginHorizontal: 3}}>{this.state.upvotes}</Text>

                        <TouchableOpacity
                            onPress={() => this.downvote()}>
                            <IconFA
                                name="arrow-down"
                                size={15}
                                color={this.state.downvoteColor}/>
                        </TouchableOpacity>

                    </View>
                </View>
                <Text style={comment.comment}>{this.props.comment}</Text>
                <FlatList
                    style={{marginTop: 5,}}
                    data={this.props.replies}
                    renderItem={({item}) => <Reply username={item.replyname} reply={item.replycomment}/>}
                    keyExtractor={item => item.replyname}
                />
            </View>
        )
    }
}

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