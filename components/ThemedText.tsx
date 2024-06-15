import React from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CustomComponentProps {
  text: string;
  color: string;
}

const CustomComponent: React.FC<CustomComponentProps> = ({ text, color }) => {
  return (
    <Text style={{ color }}>{text}</Text>
  );
};

export default CustomComponent;
