import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeRoutes } from './HomeStack.routes';
import { RecordsRoutes } from './RecordsStack.routes';

const { Navigator, Screen } = createStackNavigator();

export const MainRoutes: FC = () => (
  <Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#fff' },
      headerTintColor: '#392E60',
    }}
  >
    <Screen component={HomeRoutes} name="HomeStack" />
    <Screen component={RecordsRoutes} name="RecordsStack" />
  </Navigator>
);
