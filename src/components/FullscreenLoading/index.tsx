import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

const FullscreenLoading = () => (
  <View style={styles.container}>
    <ActivityIndicator size={30} />
  </View>
);

export default FullscreenLoading;
