import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [number, setNumber] = useState('');

  const clear = () => {
    setNumber('');
  };

  const handlePress = (value: string) => {
    setNumber((prev) => prev + value);
  };

  const handleEqual = () => {
    setNumber((prev) => evaluate(prev).toString());
  };

  const button = [
    ['1', '2', '3', '+'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '*'],
    ['D', '0', '=', '/'],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text>{number}</Text>
      {button.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: 'row' }}>
          {row.map((buttonValue) => (
            <TouchableOpacity
              key={buttonValue}
              onPress={() => {
                if (buttonValue === '=') {
                  handleEqual();
                } else if (buttonValue === 'D') {
                  clear();
                } else {
                  handlePress(buttonValue);
                }
              }}
              style={styles.button}
            >
              <Text>{buttonValue}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});

export default Calculator;
