import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Thumbnail from "./Thumbnail";
import {Loading} from "./Loading";

export default class PictureRow extends Component {
    constructor (props) {
        super(props);
        this.state = {
            horizontal: true,
            columns: 1,
            isLoading: true,
            data: []
        }
    }
    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        fetch('http://ec2-15-164-96-242.ap-northeast-2.compute.amazonaws.com:8088/api/v1/user/${this.props.api}/'+global.nick,
            {method: 'GET',
            })
            .then(response => {return response.json()})
            .then(response => this.setState({data: response, isLoading: false}))
            .catch(e => console.log(e));
    };

    expandRow() {
        if (this.state.horizontal) {
            this.setState({
                horizontal: false,
                columns: 3,
            })
        } else {
            this.setState({
                horizontal: true,
                columns: 1
            })
        }
    }
    render() {
        if (this.state.isLoading) {
            return (
                <Loading/>
            )
        } else {
            return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.expandRow()}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </TouchableOpacity>
                    <FlatList
                        contentContainerStyle={styles.list}
                        horizontal={this.state.horizontal}
                        numColumns={this.state.columns}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.data}
                        renderItem={({item}) =>
                            <Thumbnail
                                style={styles.pic}
                                id={item.postID}
                                navigation={this.props.navigation}
                            />}
                        keyExtractor={item => item.postID.toString()}
                        key={this.state.horizontal}
                    />
                </View>
            );
        }
    }
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom:10,
        color: "black",
    },
    pic: {
        backgroundColor: '#f97777',
        width: 100,
        height: 100,
        borderRadius: 3,
        marginRight: 20,
        marginBottom: 20,
    },

});

