import React, {Component} from 'react';
import {Button, Image, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import Header from "../Components/Header";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class UploadScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
        typedText: 'please type your text'
        };
    }

    state = {
        image: null,
      };

      selectPicture = async () => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
          aspect: 1,
          allowsEditing: true,
        });
        if (!cancelled) this.setState({ image: uri });
      };

    render(){
    let { image } = this.state;
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
            <Header navigation={this.props.navigation}/>
            <Text style={styles.description}> Title </Text>
            <TextInput style ={styles.box}
            keyboardType = 'email-address'
            placeholder = 'Type in your title'
            placeholderTextColor = 'black'
            onChangeText = {
                (text) => {
                    this.setState(
                        (previousState) => {
                            return{
                                typedText: text
                            };
                        }
                    );
                }
            }
        />
        <Text style={styles.description}> Description </Text>
        <TextInput style ={styles.box1}
                    multiline
                    numberOfLines={4}
                    keyboardType = 'email-address'
                    placeholder = 'Type in your description'
                    placeholderTextColor = 'black'
                    onChangeText = {
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return{
                                        typedText: text
                                    };
                                }
                            );
                        }
                    }
        />
        <Button
                  title="Pick an image from camera roll"
                  onPress={this._pickImage}
                />
         {image &&
                   <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Button onPress={() => {alert("submitted"); this.props.navigation.navigate("Main")}}
                  title="Submit"
        />
        </View>
        </TouchableWithoutFeedback>
        );
    }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    body: {
        flex: 1,
        alignSelf: 'stretch',
        marginHorizontal: 10,
    },
    box:{
        height: 40,
        margin: 20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    box1:{
          height: 70,
          margin: 20,
          padding: 10,
          borderColor: 'gray',
          borderWidth: 1
      },
    description:{
        fontSize: 30,
        fontWeight:'bold',
        padding:10
    }

});

