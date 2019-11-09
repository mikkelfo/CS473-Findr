import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet, Image, TouchableOpacity, Dimensions} from "react-native";
import Header from "./Header";

// TODO: Load data (pictures) from database
let DATA = [
    {id: '1',}, {id: '2',}, {id: '3',}, {id: '4',}, {id: '5',}, {id: '6',},{id: '7',}, {id: '8'}, {id: '9'},
    {id: "a"}, {id: "b"}, {id: "c"}, {id: "d"}, {id: "e"}, {id: "f"}, {id: "g"}, {id: "h"}, {id: "i"}, {id: "j"}
];

const Picture = props => {
    return (
        <TouchableOpacity onPress={() => alert(props.id)}>
            <Image style={styles.pic}/>
        </TouchableOpacity>
    );
};
const numColumns = 3;
const {height, width} = Dimensions.get("window");

class DiscoveryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: DATA,
            page: 0,
        }
    }
    render() {
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
                    renderItem={({item}) => <Picture id={item.id}/>}
                    keyExtractor={item => item.id}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // TODO: Fix this hack
        height: height + width/3 + 125,
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

export default DiscoveryPage;
