import React, { FC, useState } from 'react';
import {
  View,
  TextInput,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../styles/colors';

interface InputProps {
  onChangeText(value: any): void;
  value: string;
  returnKeyType?: ReturnKeyTypeOptions;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  icon?: string;
}

const Input: FC<InputProps> = ({
  icon,
  keyboardType,
  returnKeyType,
  value,
  onChangeText,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.input}>
      <Feather
        name={icon}
        size={20}
        color={isFocused ? colors.icon : colors.info}
      />
      <TextInput
        {...props}
        value={value}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        clearButtonMode="while-editing"
        style={styles.textInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default Input;
