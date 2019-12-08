import React, {Component} from 'react';
import {
    AsyncStorage,
    Button,
    Image,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
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

      upload = async()=>{
          const {image,title,description} = this.state;
          const test = JSON.stringify({
              "title": title,
              "imageSrc": "data:image/jpeg;base64,"+image.base64,
              "description": description,
              "username": "user1"
          });
          await fetch('http://143.248.219.120:8088/api/v1/post/post', {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: test,
          });

      }
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
                                title: text
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
                                        description: text
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
                   <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
        <Button onPress={() => this.upload()}
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
      aspect: [3, 4],
      quality: 1,
        base64: true
    });


    if (!result.cancelled) {
      this.setState({ image: result });
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

