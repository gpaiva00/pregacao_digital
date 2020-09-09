import React, {
  createContext,
  useState,
  useContext,
  FC,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { IPreachingRecord, ICall } from '../common/Interfaces';

interface PreachingRecordsProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setCurrentPreachingRecord: React.Dispatch<
    React.SetStateAction<IPreachingRecord>
  >;
  currentPreachingRecord: IPreachingRecord;
  handleAddCall(call: ICall): void;
  handleSaveRecord(): void;
  handleAddTypeAndPublication(): void;
}

const Context = createContext({} as PreachingRecordsProps);
const dailyRecordsKey = '@digitalPreachinRecords';

const PreachingRecordsProvider: FC = ({ children }) => {
  const [currentPreachingRecord, setCurrentPreachingRecord] = useState(
    {} as IPreachingRecord,
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddCall = useCallback(
    (call: ICall) => {
      const newCurrentPreachingRecord = { ...currentPreachingRecord };

      newCurrentPreachingRecord.calls.push(call);

      setCurrentPreachingRecord(newCurrentPreachingRecord);
    },
    [currentPreachingRecord],
  );

  const handleAddTypeAndPublication = useCallback(() => {
    const newCurrentPreachingRecord = { ...currentPreachingRecord };

    if (newCurrentPreachingRecord.calls.length) {
      const { publication, type } = newCurrentPreachingRecord.calls[
        newCurrentPreachingRecord.calls.length - 1
      ];
      const newType = type.indexOf('Estudo') === -1 ? 'Revisita' : 'Estudo';

      newCurrentPreachingRecord.type = newType;
      newCurrentPreachingRecord.publication = publication;

      setCurrentPreachingRecord(newCurrentPreachingRecord);
    }
  }, [currentPreachingRecord]);

  const handleSaveRecord = useCallback(() => {}, []);

  const providerValue = {
    isEditing,
    setIsEditing,
    isLoading,
    setCurrentPreachingRecord,
    currentPreachingRecord,
    handleAddCall,
    handleSaveRecord,
    handleAddTypeAndPublication,
  };

  // useEffect(() => {

  // }, []);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

function usePreachingRecords(): PreachingRecordsProps {
  const context = useContext(Context);

  if (!context)
    throw new Error(
      'usePreachingRecords must be used whithin an PreachingRecords',
    );

  return context;
}

export { PreachingRecordsProvider, usePreachingRecords };
