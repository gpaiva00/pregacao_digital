import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface ButtonProps {
  onPress(): void;
  title: string;
}

const Button: FC<ButtonProps> = ({ children, title, ...props }) => (
  <TouchableOpacity style={styles.button} {...props}>
    {children}
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
