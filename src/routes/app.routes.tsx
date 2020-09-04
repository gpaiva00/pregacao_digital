import React, { FC } from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../pages/Home';
import NewRegister from '../pages/NewRegister';
import RegisterDetails from '../pages/RegisterDetails';
import Profile from '../pages/Profile';

const AppStack = createStackNavigator();

const AppRoutes: FC = () => (
  <AppStack.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#fff' },
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
      name="NewRegister"
      component={NewRegister}
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
      name="RegisterDetails"
      component={RegisterDetails}
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
  </AppStack.Navigator>
);

export default AppRoutes;
