import React, { FC } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import NewRecord from '../pages/NewRecord';
import RecordDetails from '../pages/RecordDetails';

const { Navigator, Screen } = createStackNavigator();

export const RecordsRoutes: FC = () => (
  <Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#fff' },
      headerTintColor: '#392E60',
      headerBackTitleVisible: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Screen
      name="NewRecord"
      component={NewRecord}
      options={{
        title: 'Novo Registro',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />

    <Screen
      name="RecordDetails"
      component={RecordDetails}
      options={{
        title: 'Detalhes',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </Navigator>
);
