import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import CardStack, {Card} from 'react-native-card-stack-swiper';
import Constants from "expo-constants";
import {Circle} from "./Circle";
import {Loading} from "./Loading";

export default class Swiper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        }
    }
    left(index) {
        // TODO: Add something here?
    }
    async right(index) {
        // TODO: Get current user
        const username = "user2";
        const encodedValue = encodeURIComponent(username);
        const postID = this.state.data[index].postID;
        fetch(`http://ec2-15-164-211-213.ap-northeast-2.compute.amazonaws.com:8088/api/v1/user/addFavorites/${encodedValue}/${postID}`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( {
                "username": username,
                "postID": postID
            })})
            .catch(error => console.log("Error:",error))
    }
    up(index) {
        const username = "user2";
        const encodedValue = encodeURIComponent(username);
        const postID = this.state.data[index].postID;
        fetch(`http://ec2-15-164-211-213.ap-northeast-2.compute.amazonaws.com:8088/api/v1/user/addUserMatches/${encodedValue}/${postID}`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( {
                "username": username,
                "postID": postID
            })})
            .catch(error => console.log("Error:",error));
        this.props.navigation.navigate("FullPic", {
            id: postID
        });
    }
    componentDidMount() {
        this.fetchCards()
    }

    fetchCards() {
        fetch(`http://ec2-15-164-211-213.ap-northeast-2.compute.amazonaws.com:8088/api/v1/post/getSwiperPosts`,
            {method: 'GET',
            })
            .then(response => {return response.json()})
            .then(response => this.setState({data: response, isLoading: false}))
            .catch(e => console.log(e));
    }
    renderCards() {
        return this.state.data.map((item) => {
            return(
                <Card style={[styles.card]} key={item.postID}>
                    <View style={styles.textcontainer}>
                        <Text style={styles.title}>{item.username}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </Card>
        )}
    )}
    render() {
        if (this.state.isLoading) {
            return (
                <Loading/>
            )
        } else {
            return (
                <View style={{flex: 1, alignSelf: "stretch",}}>
                    <CardStack
                        style={styles.container}
                        ref={swiper => {
                            this.swiper = swiper
                        }}
                        disableBottomSwipe={true}
                        onSwipedLeft={i => this.left(i)}
                        onSwipedRight={i => this.right(i)}
                        onSwipedTop={i => this.up(i)}
                    >
                        {this.renderCards()}
                    </CardStack>
                    <View style={styles.actionbar}>
                        <TouchableOpacity
                            onPress={() => this.swiper.swipeLeft()}>
                            <Circle icon="times" regular/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.swiper.swipeTop()}>
                            <Circle icon="heart"/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.swiper.swipeRight()}>
                            <Circle icon ="comment-dots"/>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        margin: 20,
    },
    card: {
        height: height - (Constants.statusBarHeight + 80 + 65 + 40 + 10),
        width: width - 40,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: '#f97777',
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    },
    actionbar: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 25,
    },
    textcontainer: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 40,
        flex: 1,
    },
    description: {
        fontSize: 15,
        marginTop: 20,
    },
});