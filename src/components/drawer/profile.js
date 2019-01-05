import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

var { height, width } = Dimensions.get('window');
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: ""
    }
  }
  openImageDialog = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imageSource: source,
        });
      }
    });
  }
  openEditDialog = () => {
    console.log('edit opened')
  }
  renderImage = () => {
    if (this.state.imageSource) {
      return (
        <View >
          <Image source={this.state.imageSource} style={{ width: 200, height: height / 4 }} />
          <Button
            onPress={() => this.openImageDialog()}
            title="Change photo"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.openEditDialog()}
            title="Crop photo"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      )
    }
    else {
      return (
        <TouchableOpacity style={styles.image} onPress={() => this.openImageDialog()}>
          <Text>Image Not Present</Text>
        </TouchableOpacity>
      )
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Stars</Text>
        {this.renderImage()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    height: height / 2
  },
  image: {
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 4
  }
});
