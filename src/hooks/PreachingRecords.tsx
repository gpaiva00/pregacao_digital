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

      // modify reacord type and publication
      const { publication, type } = call;

      // if type's name has Revisita on it, define new type like Revisita
      const newType = type.indexOf('Estudo') === -1 ? 'Revisita' : 'Estudo';

      newCurrentPreachingRecord.type = newType;
      newCurrentPreachingRecord.publication = publication;

      // type has changed? Refresh studies and calls list at Home page
      if (newType !== currentPreachingRecord.type) setTypeHasChanged(true);

      setCurrentPreachingRecord(newCurrentPreachingRecord);
    },
    [currentPreachingRecord],
  );

  // create new record in storage
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

    // clear fields
    setIsEditing(false);
  }, [callsRecords, currentPreachingRecord, studiesRecords]);

  const handleTypeHasChanged = useCallback(
    async (current: IPreachingRecord) => {
      const previousType = current.type === 'Revisita' ? 'Estudo' : 'Revisita';

      const keyType = storagedKeys[previousType];
      let storagedRecords = await AsyncStorage.getItem(keyType);

      storagedRecords = JSON.parse(storagedRecords);

      const storagedRecordIndex = storagedRecords.findIndex(
        record => record.id === current.id,
      );

      // remove from storaged
      storagedRecords.splice(storagedRecordIndex, 1);
      // set back to storage
      await AsyncStorage.setItem(keyType, JSON.stringify(storagedRecords));

      const newRecords =
        current.type === 'Revisita' ? [...studiesRecords] : [...callsRecords];

      // remove from state
      const index = newRecords.findIndex(record => record.id === current.id);

      newRecords.splice(index, 1);

      // update state
      if (current.type === 'Revisita') {
        setStudiesRecords(newRecords);
        setCallsRecords([...callsRecords, current]);
        return;
      }

      setCallsRecords(newRecords);
      setStudiesRecords([...studiesRecords, current]);
    },
    [callsRecords, studiesRecords],
  );

  const handleUpdateRecord = useCallback(async () => {
    const newRecords =
      currentPreachingRecord.type === 'Revisita'
        ? [...callsRecords]
        : [...studiesRecords];

    const index = newRecords.findIndex(record => record.id === currentPreachingRecord.id);
    newRecords[index] = currentPreachingRecord;

    // update state
    if (currentPreachingRecord.type === 'Revisita') setCallsRecords(newRecords);
    else setStudiesRecords(newRecords);
    console.log('handleUpdateRecord', currentPreachingRecord.type);

    if (typeHasChanged) handleTypeHasChanged(currentPreachingRecord);

    // update storage
    const keyType = storagedKeys[currentPreachingRecord.type];
    await AsyncStorage.setItem(keyType, JSON.stringify(newRecords));

    setTypeHasChanged(false);
    setIsEditing(false);
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
