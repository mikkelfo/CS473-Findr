import React, {Component} from 'react';
import {AsyncStorage, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';


export default class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            nickname:'',
            password: ''
        }
        global.nick;
        global.pass;
    }

    saveData =async()=>{

        const {nickname,password} = this.state;
        global.nick= nickname;
        global.pass=  password;

        AsyncStorage.setItem("a", "a");
        if(this.props.type !== 'Login')
        {
            await AsyncStorage.setItem(nickname, password);


            Keyboard.dismiss();
            alert("You successfully registered")

            this.props.nav.navigate('Main');
        }
        else if(this.props.type === 'Login')
        {
           try {
               const value = await AsyncStorage.getItem(nickname);
               if (password === value) {
                    this.props.nav.navigate('Main');
               }
               else{
                    alert("Your nickname or your password is wrong");
               }
             } catch (error) {
               console.log(error.message);
             }
        }
    }


    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                onChangeText={(nickname) => this.setState({nickname})}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Nickname"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="default"
                onSubmitEditing={()=> this.password.focus()}/>

                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});