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
  return (
    <GenericTemplate
      buttonPress={() => navigation.navigate('RecordsStack', { screen: 'NewRecord' })}
      buttonTitle="Continuar"
    >
      <View style={{ flex: 1 }}>
        <Text>OI</Text>
      </View>
    </GenericTemplate>
  );
};

export default Home;
