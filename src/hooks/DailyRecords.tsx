import React, {
  createContext,
  useState,
  useContext,
  FC,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { IDailyPreaching } from '../common/Interfaces';

interface DailyRecordsProps {
  saveDailyRecord(record: IDailyPreaching): Promise<void>;
  removeDailyRecord(id: number): Promise<void>;
  dailyRecords: IDailyPreaching[];
  isLoading: boolean;
}

const Context = createContext({} as DailyRecordsProps);
const dailyRecordsKey = '@digitalPreachingDaily';

const DailyRecordsProvider: FC = ({ children }) => {
  const [dailyRecords, setDailyRecords] = useState([] as IDailyPreaching[]);
  const [isLoading, setIsLoading] = useState(false);

  const saveDailyRecord = useCallback(
    async (record: IDailyPreaching) => {
      const newDailyRecords = [...dailyRecords, record];

      setDailyRecords(newDailyRecords);

      const storeRecord = JSON.stringify(newDailyRecords);

      await AsyncStorage.setItem(dailyRecordsKey, storeRecord);
    },
    [dailyRecords],
  );

  const removeDailyRecord = useCallback(
    async (id: number) => {
      const newDailyRecords = [...dailyRecords];
      const index = newDailyRecords.findIndex(record => record.id === id);

      newDailyRecords.splice(index, 1);
      setDailyRecords(newDailyRecords);

      await AsyncStorage.setItem(
        dailyRecordsKey,
        JSON.stringify(newDailyRecords),
      );
    },
    [dailyRecords],
  );

  const providerValue = {
    saveDailyRecord,
    removeDailyRecord,
    dailyRecords,
    isLoading,
  };

  useEffect(() => {
    async function loadStoragedData() {
      // return AsyncStorage.multiRemove([dailyRecordsKey]);
      setIsLoading(true);

      const [[, storagedDaily]] = await AsyncStorage.multiGet([
        dailyRecordsKey,
      ]);

      if (storagedDaily) setDailyRecords(JSON.parse(storagedDaily));

      setIsLoading(false);
    }

    loadStoragedData();
  }, []);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

function useDailyRecords(): DailyRecordsProps {
  const context = useContext(Context);

  if (!context)
    throw new Error(
      'useDailyRecords must be used whithin an DailyRecordsProvider',
    );

  return context;
}

export { DailyRecordsProvider, useDailyRecords };
