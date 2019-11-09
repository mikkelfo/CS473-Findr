import React, {Component} from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconO from 'react-native-vector-icons/Octicons';
import Constants from 'expo-constants';
import {DrawerActions} from "react-navigation-drawer";



class Header extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.header}>
                <TouchableOpacity>
                    <View style={styles.square}>
                        <IconFA
                            name="user-circle"
                            size={65}
                            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                        />
                    </View>
                </TouchableOpacity >
                <TouchableOpacity>
                    <View style={styles.square}>
                        <IconFA
                            name="bookmark"
                            size={65}
                            onPress={() => navigate('Bookmark')}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.square}>
                        <IconO
                            name="flame"
                            size={65}
                            onPress={() => navigate('Discovery')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        height: 80,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 25,
        marginTop: Constants.statusBarHeight,
    },
    square: {
        minWidth: 65,
        minHeight: 65,
        alignItems: "center",
    }
});

export default Header;