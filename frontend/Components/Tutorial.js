import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {Card} from "react-native-card-stack-swiper";
import Constants from "expo-constants";
import SvgUri from "react-native-svg-uri";

export const TutorialCard = () => {
    return(
        <Card style={styles.card}>
            <View style={{alignItems:"center",position:"absolute", top:10, left:"25%", right:"25%"}}>
                <SvgUri
                    width="100"
                    height="100"
                    source={require('../assets/up.svg')}
                />
                <Text>Comment</Text>
            </View>
            <View style={{alignItems:"center",position:"absolute", right:5}}>
                <SvgUri
                    width="100"
                    height="100"
                    source={require('../assets/right.svg')}
                />
                <Text>Favorite</Text>
            </View>
            <View style={{alignItems:"center",position:"absolute", left:5}}>
                <SvgUri
                    width="100"
                    height="100"
                    source={require('../assets/left.svg')}
                />
                <Text>Skip</Text>
            </View>
        </Card>
    )
};

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
        backgroundColor: '#f97777',
        justifyContent:"center",
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
    overlay: {
        flex: 1,
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        width: width,
        height: height,
        zIndex: 0
    }
});
// zIndex: 0 for buttons
// zIndex: 4 for swiper