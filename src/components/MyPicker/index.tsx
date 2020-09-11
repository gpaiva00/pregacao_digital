import React, { FC } from 'react';
import { Picker } from '@react-native-community/picker';

import styles from './styles';

interface PickerProps {
  items: any[];
  value: string;
  setValueChange(value: any, index: number): void;
}

const MyPicker: FC<PickerProps> = ({ items, value, setValueChange }) => {
  return (
    <Picker
      selectedValue={value}
      style={styles.picker}
      itemStyle={styles.item}
      onValueChange={(itemValue, itemIndex) => setValueChange(itemValue, itemIndex)}
    >
      {items.map((item, index) => (
        <Picker.Item key={String(index)} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};

export default MyPicker;
