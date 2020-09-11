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
import NewPreachingRecord from '../pages/NewRecord/NewPreachingRecord';

interface PreachingRecordsProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setCurrentPreachingRecord: React.Dispatch<React.SetStateAction<IPreachingRecord>>;
  currentPreachingRecord: IPreachingRecord;
  studiesRecords: IPreachingRecord[];
  callsRecords: IPreachingRecord[];
  handleAddCall(call: ICall): void;
  handleSaveRecord(): void;
  handleUpdateRecord(): void;
  handleAddTypeAndPublication(): void;
}

const Context = createContext({} as PreachingRecordsProps);
const storagedKeys = {
  Revisita: '@digitalPreachingCallsRecords',
  Estudo: '@digitalPreachingStudiesRecords',
};

const PreachingRecordsProvider: FC = ({ children }) => {
  const [studiesRecords, setStudiesRecords] = useState([] as IPreachingRecord[]);
  const [callsRecords, setCallsRecords] = useState([] as IPreachingRecord[]);
  const [currentPreachingRecord, setCurrentPreachingRecord] = useState(
    {} as IPreachingRecord,
  );
  const [isEditing, setIsEditing] = useState(false);
  const [typeHasChanged, setTypeHasChanged] = useState(false);
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

      // type has changed?
      if (newType !== currentPreachingRecord.type) setTypeHasChanged(true);
    }
  }, [currentPreachingRecord]);

  const handleSaveRecord = useCallback(async () => {
    const keyType = storagedKeys[currentPreachingRecord.type];
    let newRecords = [...studiesRecords, currentPreachingRecord];

    if (currentPreachingRecord.type === 'Revisita') {
      newRecords = [...callsRecords, currentPreachingRecord];
      setCallsRecords([...callsRecords, currentPreachingRecord]);
    } else {
      setStudiesRecords([...studiesRecords, currentPreachingRecord]);
    }

    await AsyncStorage.setItem(keyType, JSON.stringify(newRecords));
  }, [callsRecords, currentPreachingRecord, studiesRecords]);

  const handleTypeHasChanged = useCallback(async () => {
    // console.log('TYPE HAS CHANGED', currentPreachingRecord.type);
    const changedType =
      currentPreachingRecord.type === 'Revisita' ? 'Estudo' : 'Revisita';
    const newRecords =
      currentPreachingRecord.type === 'Revisita'
        ? [...studiesRecords]
        : [...callsRecords];

    const keyType = storagedKeys[changedType];

    let storagedRecords = await AsyncStorage.getItem(keyType);

    storagedRecords = JSON.parse(storagedRecords);

    const storagedRecordIndex = storagedRecords.findIndex(
      record => record.id === currentPreachingRecord.id,
    );

    // remove from storaged
    storagedRecords.splice(storagedRecordIndex, 1);

    await AsyncStorage.setItem(keyType, JSON.stringify(storagedRecords));

    // remove from state
    const index = newRecords.findIndex(record => record.id === currentPreachingRecord.id);
    newRecords.splice(index, 1);

    // update state
    if (currentPreachingRecord.type === 'Revisita') setStudiesRecords(newRecords);
    else setCallsRecords(newRecords);
  }, [
    callsRecords,
    currentPreachingRecord.id,
    currentPreachingRecord.type,
    studiesRecords,
  ]);

  const handleUpdateRecord = useCallback(async () => {
    const keyType = storagedKeys[currentPreachingRecord.type];
    const newRecords =
      currentPreachingRecord.type === 'Revisita'
        ? [...callsRecords]
        : [...studiesRecords];

    const index = newRecords.findIndex(record => record.id === currentPreachingRecord.id);
    newRecords[index] = currentPreachingRecord;

    // update state
    if (currentPreachingRecord.type === 'Revisita') setCallsRecords(newRecords);
    else setStudiesRecords(newRecords);

    // update storage
    await AsyncStorage.setItem(keyType, JSON.stringify(newRecords));

    if (typeHasChanged) handleTypeHasChanged();
  }, [
    callsRecords,
    currentPreachingRecord,
    handleTypeHasChanged,
    studiesRecords,
    typeHasChanged,
  ]);

  const providerValue = {
    isEditing,
    setIsEditing,
    isLoading,
    setCurrentPreachingRecord,
    currentPreachingRecord,
    handleAddCall,
    handleSaveRecord,
    handleUpdateRecord,
    handleAddTypeAndPublication,
    callsRecords,
    studiesRecords,
  };

  useEffect(() => {
    async function loadStoragedData() {
      // return AsyncStorage.multiRemove([preachingRecordsKey]);
      setIsLoading(true);
      const preachingCallsRecordsKey = storagedKeys.Revisita;
      const preachingStudiesRecordsKey = storagedKeys.Estudo;

      const [
        [, storagedCallsRecord],
        [, storagedStudiesRecord],
      ] = await AsyncStorage.multiGet([
        preachingCallsRecordsKey,
        preachingStudiesRecordsKey,
      ]);
      // console.log('calls', JSON.parse(storagedCallsRecord));
      // console.log('studies', JSON.parse(storagedStudiesRecord));

      if (storagedCallsRecord) setCallsRecords(JSON.parse(storagedCallsRecord));
      if (storagedStudiesRecord) setStudiesRecords(JSON.parse(storagedStudiesRecord));

      setIsLoading(false);
    }

    loadStoragedData();
  }, []);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

function usePreachingRecords(): PreachingRecordsProps {
  const context = useContext(Context);

  if (!context)
    throw new Error('usePreachingRecords must be used whithin an PreachingRecords');

  return context;
}

export { PreachingRecordsProvider, usePreachingRecords };
