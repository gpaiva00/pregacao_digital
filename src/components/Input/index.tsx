import React, { FC, useState } from 'react';
import { View, TextInput, KeyboardTypeOptions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../styles/colors';

interface InputProps {
  onChangeText(): void;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  icon?: string;
}

const Input: FC<InputProps> = ({ children, icon, keyboardType, ...props }) => {
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
          keyboardType={keyboardType}
          style={styles.textInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};

export default Input;
