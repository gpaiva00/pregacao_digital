import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppLoading } from 'expo';
import MainProvider from './src/hooks';
import { useDailyRecords } from './src/hooks/DailyRecords';

import { MainRoutes } from './src/routes';

const App: FC = () => {
  const { isLoading } = useDailyRecords();

  if (isLoading) return <AppLoading />;

  return (
    <NavigationContainer>
      <MainProvider>
        <MainRoutes />
      </MainProvider>
    </NavigationContainer>
  );
};

export default App;
