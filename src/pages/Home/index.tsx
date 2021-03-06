import React, { FC, useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { usePreachingRecords } from '../../hooks/PreachingRecords';

import styles from './styles';
import HeaderRight from './HeaderRight';
import DailyPreaching from './DailyPreaching';
import Calls from './Calls';
import Studies from './Studies';
import NextCalls from './NextCalls';

interface HomeProps {
  navigation: StackNavigationProp<any>;
}

const Home: FC<HomeProps> = ({ navigation }) => {
  const { setIsEditing } = usePreachingRecords();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          handleGoToProfile={() => navigation.navigate('Profile')}
          handleGoToNewRegister={() => {
            setIsEditing(false);
            navigation.navigate('NewRecord');
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <NextCalls />
        <DailyPreaching />
        <Calls navigation={navigation} />
        <Studies navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
