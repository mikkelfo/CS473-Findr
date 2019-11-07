import React from 'react';
import {FlatList, Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";

// TODO: Load data (pictures) from database
const DATA = [
    {
        id: 'id1',
        src: 'image1.png',
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

const PictureCard = props => {
    return (
            <TouchableOpacity onPress={() => selectMovie(props.id)}>
                <Image style={styles.pic}/>
            </TouchableOpacity>
    );
};
function selectMovie(id) {
    alert(id)
}

const PictureRow = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                contentContainerStyle={styles.item}
                style={styles.list}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={DATA}
                renderItem={({item}) => <PictureCard src={item.src} id={item.id}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        paddingVertical: 10,
    },
    item: {
        marginHorizontal: 10,
    },
    pic: {
        backgroundColor: '#f97777',
        width: 100,
        height: 100,
        borderRadius: 3,
        marginRight: 20,

        // TODO: Remove when there's pictures
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        paddingHorizontal: 10,
        marginBottom:10,
    },
});

export default PictureRow;
