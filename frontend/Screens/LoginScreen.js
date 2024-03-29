
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Form from '../Components/Form';

export default class Login extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return(
                <View style={styles.container}>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
                <Form type="Login" nav={this.props.navigation}/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Dont have an account yet? </Text>
                    <TouchableOpacity onPress={() => navigate('Signup')}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row',
    },
    signupText: {
      color: '#12799f',
      fontSize:16,
    },
    signupButton: {
        color: '#12799f',
        fontSize:16,
        fontWeight: '500',
    }
});