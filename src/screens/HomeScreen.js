import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Components')}
        title="Components Screen"
      />
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('ListScreen')}
        title="List Screen"
      />
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Image')}
        title="Image Screen"
      />
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Counter')}
        title="Counter Screen"
      />
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Color')}
        title="Color Screen"
      />
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('CustomColor')}
        title="Custom Color Screen"
      />
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('BoxModel')}
        title="Box Model Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  buttonStyle: {
    marginTop: 20,
  },
});

export default HomeScreen;
