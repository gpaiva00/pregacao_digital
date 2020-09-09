import React, { FC } from 'react';

import { DailyRecordsProvider } from './DailyRecords';
import { PreachingRecordsProvider } from './PreachingRecords';

const MainProvider: FC = ({ children }) => (
  <PreachingRecordsProvider>
    <DailyRecordsProvider>{children}</DailyRecordsProvider>
  </PreachingRecordsProvider>
);

export default MainProvider;
