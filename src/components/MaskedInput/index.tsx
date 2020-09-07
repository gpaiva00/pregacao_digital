import React, { FC, useState } from 'react';
import { View, KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text';
import styles from './styles';
import colors from '../../styles/colors';

interface InputProps {
  onChangeText(value: any): void;
  value: string;
  returnKeyType?: ReturnKeyTypeOptions;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  icon?: string;
  type: TextInputMaskTypeProp;
  style: any;
  options: any;
}

const MaskedInput: FC<InputProps> = ({
  icon,
  keyboardType,
  returnKeyType,
  value,
  onChangeText,
  type,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.input, style]}>
      <Feather
        name={icon}
        size={20}
        color={isFocused ? colors.icon : colors.info}
      />
      <TextInputMask
        {...props}
        type={type}
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

export default MaskedInput;
