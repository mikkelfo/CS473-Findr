import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Thumbnail from "./Thumbnail";

// TODO: Load data (pictures) from database
const DATA = [
    {
        id: 'id1',
        src: 'image11111111111111111.png',
    }, {
        id: 'id2',
        src: 'image2.png',
    }, {
        id: 'id3',
        src: 'image3.png',
    }, {
        id: 'id4',
        src: 'image4.png',
    }, {
        id: 'id5',
        src: 'image5.png',
    }, {
        id: 'id6',
        src: 'image5.png',
    },
];

export default class PictureRow extends Component {
    constructor (props) {
        super(props);
        this.state = {
            horizontal: true,
            columns: 1,
        }
    }
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
                    data={DATA}
                    renderItem={({item}) => <Thumbnail style={styles.pic} src={item.src} id={item.id} navigation={this.props.navigation}/>}
                    keyExtractor={item => item.id}
                    key={this.state.horizontal}
                />
            </View>
        );
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

