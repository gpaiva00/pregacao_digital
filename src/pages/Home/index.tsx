import React, { FC, useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';
import HeaderRight from './HeaderRight';

interface HomeProps {
  navigation: StackNavigationProp<any>;
}

const Home: FC<HomeProps> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          handleGoToProfile={() => navigation.navigate('Profile')}
          handleGoToNewRegister={() => navigation.navigate('NewRegister')}
        />
      ),
    });
  }, []);

  return <View style={styles.container} />;
};

export default Home;
