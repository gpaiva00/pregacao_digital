import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppLoading } from 'expo';
import MainProvider from './src/hooks';
import { useApp } from './src/hooks/App';

import Routes from './src/routes';

const App: FC = () => {
  const { isLoading } = useApp();
  if (isLoading) return <AppLoading />;
  return (
    <NavigationContainer>
      <MainProvider>
        <Routes />
      </MainProvider>
    </NavigationContainer>
  );
};

export default App;
