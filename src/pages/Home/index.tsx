import React, { FC, useLayoutEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';
import HeaderRight from './HeaderRight';
import DailyPreaching from './DailyPreaching';
import Calls from './Calls';
import Studies from './Studies';

interface HomeProps {
  navigation: StackNavigationProp<any>;
}

const Home: FC<HomeProps> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          handleGoToProfile={() => navigation.navigate('Profile')}
          handleGoToNewRegister={() => navigation.navigate('NewRecord')}
        />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <DailyPreaching />
        <Calls />
        <Studies />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
