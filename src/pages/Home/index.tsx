import React, { FC, useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { usePreachingRecords } from '../../hooks/PreachingRecords';

import styles from './styles';
import HeaderRight from './HeaderRight';
import GenericTemplate from '../../components/templates/GenericTemplate';

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
    <GenericTemplate buttonPress={() => {}} buttonTitle="Continuar">
      <View style={{ flex: 1 }}>
        <Text>OI</Text>
      </View>
    </GenericTemplate>
  );
};

export default Home;
