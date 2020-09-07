import React, { FC } from 'react';

import { AppProvider } from './App';

const MainProvider: FC = ({ children }) => (
  <AppProvider>{children}</AppProvider>
);

export default MainProvider;
