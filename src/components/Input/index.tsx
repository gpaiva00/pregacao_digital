import React, { FC, useState } from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../styles/colors';

interface ButtonProps {
  onChangeText(): void;
  placeholder: string;
  icon: string;
}

const Input: FC<ButtonProps> = ({ children, icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Feather
          style={styles.icon}
          name={icon}
          size={20}
          color={isFocused ? colors.icon : colors.info}
        />
        <TextInput
          {...props}
          style={styles.textInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};

export default Input;
