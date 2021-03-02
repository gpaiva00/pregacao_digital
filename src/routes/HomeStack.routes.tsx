import React, { FC } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Home from '../pages/Home';
import HeaderRight from '../pages/Home/HeaderRight';

const { Navigator, Screen } = createStackNavigator();

export const HomeRoutes: FC = () => (
  <Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#fff' },
      headerTintColor: '#392E60',
      ...TransitionPresets.SlideFromRightIOS,
      headerRight: () => (
        <HeaderRight
          handleGoToNewRegister={() => {
            // setIsEditing(false);
            // navigate('NewRecord');
          }}
        />
      ),
    }}
  >
    <Screen
      name="Home"
      component={Home}
      options={{
        title: 'Início',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </Navigator>
);
