import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentsScreen = () => {
    const name = <Text style={styles.subHeaderStyle}>My name is Shashank Biplav</Text>
       
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      {name}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle:{
      fontSize:20
  }
});

export default ComponentsScreen;
