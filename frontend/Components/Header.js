import React, {Component} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import IconFA from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Constants from 'expo-constants';
import {DrawerActions} from "react-navigation-drawer";


class Header extends Component {
    render() {
        const def = "black";
        const current = "#ffba00";

        this.state = {
            Main: def,
            Discovery: def,
            Profile: def,
        };
        const {navigate} = this.props.navigation;
        const route = this.props.navigation.state.routeName;
        if (route === "Main" || route === "Discovery") {
            eval("this.state." + route + "= '" + current.toString() + "'")
        } else {
            eval("this.state.Profile = '" + current.toString() + "'")
        }

        return (
            <View style={styles.header}>
                <TouchableOpacity>
                    <View style={styles.square}>
                        <Icon5
                            name="user-circle"
                            regular
                            size={50}
                            color={this.state.Profile}
                            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                        />
                    </View>
                </TouchableOpacity >
                <TouchableOpacity>
                    <View style={styles.square}>
                        <IconFA
                            name="home"
                            size={50}
                            color={this.state.Main}
                            onPress={() => navigate('Main')}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.square}>
                        <Icon5
                            name="compass"
                            regular
                            size={50}
                            color={this.state.Discovery}
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
        padding: 20,
        paddingBottom: 0,
        marginTop: Constants.statusBarHeight,
    },
    square: {
        minWidth: 65,
        minHeight: 65,
        alignItems: "center",
    }
});

export default Header;