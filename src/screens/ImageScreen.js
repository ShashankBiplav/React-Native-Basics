import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore = "9"/>
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore = "9"/>
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore = "9"/>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageScreen;
