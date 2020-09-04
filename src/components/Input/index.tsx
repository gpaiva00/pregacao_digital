import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

interface ButtonProps {
  onChangeText(): void;
  placeholder: string;
}

const Input: FC<ButtonProps> = ({ children, title, ...props }) => (
  <View style={styles.container}>
    <TextInput style={styles.input} {...props} />
  </View>
);

export default Input;
