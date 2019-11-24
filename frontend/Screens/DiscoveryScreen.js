import React, {Component} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from "react-native";
import Header from "../Components/Header";
import Thumbnail from "../Components/Thumbnail";
import {Loading} from "../Components/Loading";


const numColumns = 3;
const {height, width} = Dimensions.get("window");

class DiscoveryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        }
    }
    componentDidMount() {
        this.fetchCards()
    }

    fetchCards() {
        fetch(`http://192.168.0.9:8088/api/v1/post/getExplorePosts`,
            {method: 'GET',
            })
            .then(response => {return response.json()})
            .then(response => this.setState({data: response, isLoading: false}))
            .catch(e => console.log(e));
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loading/>
            )
        } else {
            return (
                <View>
                    <Header navigation={this.props.navigation}/>
                    <FlatList
                        ListHeaderComponent={
                            <Text style={styles.title}>This weeks trending</Text>
                        }
                        contentContainerStyle={styles.container}
                        showsVerticalScrollIndicator={false}
                        data={this.state.data}
                        numColumns={numColumns}
                        renderItem={({item}) =>
                            <Thumbnail
                                style={styles.pic}
                                id={item.postID}
                                navigation={this.props.navigation}/>}
                        keyExtractor={item => item.id}
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        alignItems: "center",
        // TODO: Fix this hack
        height: height + width/3 + 110,
    },
    pic: {
        backgroundColor: '#f97777',
        borderRadius: 3,
        height: width/3 - 4,
        width: width/3 - 4,
        margin: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        paddingHorizontal: 10,
    },
});

export default DiscoveryScreen;
