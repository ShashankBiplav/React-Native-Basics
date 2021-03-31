import React, { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Text style={styles.headerStyle}>Counter Screen</Text>
      <Text>Current Count: {state.count}</Text>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'INCREMENT', payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'DECREMENT', payload: 1 })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 30,
  },
});

export default CounterScreen;
