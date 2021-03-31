import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxModelScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Text #1</Text>
      <Text style={styles.textTwoStyle}>Text #2</Text>
      <Text style={styles.textThreeStyle}>Text #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height:100,
    borderWidth: 3,
    borderColor: 'black',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textOneStyle: {
    height:50,
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwoStyle: {
    height:50,
    borderWidth: 3,
    borderColor: 'blue',
    alignSelf: 'flex-end'
  },
  textThreeStyle: {
    height:50,
    borderWidth: 3,
    borderColor: 'green',
  },
});

export default BoxModelScreen;
