import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface NoDataProps {
  text: string;
}

const NoDataView: FC<NoDataProps> = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default NoDataView;
