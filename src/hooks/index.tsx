import React, { FC } from 'react';

import { DailyRecordsProvider } from './DailyRecords';

const MainProvider: FC = ({ children }) => (
  <DailyRecordsProvider>{children}</DailyRecordsProvider>
);

export default MainProvider;
