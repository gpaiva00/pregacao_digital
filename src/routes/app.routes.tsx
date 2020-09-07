import React, { FC } from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../pages/Home';
import NewRecord from '../pages/NewRecord';
import RecordDetails from '../pages/RecordDetails';
import Profile from '../pages/Profile';
import NewCall from '../pages/NewCall';

const AppStack = createStackNavigator();

const AppRoutes: FC = () => (
  <AppStack.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#fff' },
      headerTintColor: '#392E60',
    }}
  >
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        title: 'Início',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />

    <AppStack.Screen
      name="NewRecord"
      component={NewRecord}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        title: 'Novo Registro',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />

    <AppStack.Screen
      name="RecordDetails"
      component={RecordDetails}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        title: 'Detalhes',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />

    <AppStack.Screen
      name="Profile"
      component={Profile}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        title: 'Perfil',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />

    <AppStack.Screen
      name="NewCall"
      component={NewCall}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        title: 'Nova Conversa',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
