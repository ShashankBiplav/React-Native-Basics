import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListScreen = () => {
  const people = [
    { name: 'Person #1', age: 30 },
    { name: 'Person #2', age: 30 },
    { name: 'Person #3', age: 30 },
    { name: 'Person #4', age: 30 },
    { name: 'Person #5', age: 30 },
    { name: 'Person #6', age: 30 },
    { name: 'Person #7', age: 30 },
    { name: 'Person #8', age: 30 },
    { name: 'Person #9', age: 30 },
    { name: 'Person #10', age: 50 },
  ];
  return (
    <View>
      <Text style={styles.textStyle}>List Screen</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(element) => element.name}
        data={people}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.listItemStyle}>{item.name} - Age : {item.age}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  listItemStyle: {
    marginVertical: 50
  },
});

export default ListScreen;
