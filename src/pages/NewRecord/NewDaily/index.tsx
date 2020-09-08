import React, { FC, useState, useCallback } from 'react';
import { View, Text, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import MaskedInput from '../../../components/MaskedInput';

import { useDailyRecords } from '../../../hooks/DailyRecords';
import {
  fieldIsEmptyValidator,
  timeValidator,
  dateValidator,
} from '../../../utils';

import styles from './styles';
import metrics from '../../../styles/metrics';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

interface NewDaily {
  navigation: StackNavigationProp<any>;
}

const NewDaily: FC<NewDaily> = ({ navigation }) => {
  const [recordTime, setRecordTime] = useState('');
  const [recordDate, setRecordDate] = useState('');
  const [recordPublications, setRecordPublications] = useState('');
  const [recordVideos, setRecordVideos] = useState('');

  const { saveDailyRecord } = useDailyRecords();

  // eslint-disable-next-line consistent-return
  const handleSaveRecord = useCallback(async () => {
    const record = {
      id: Date.now(),
      recordTime,
      recordDate,
      recordPublications: Number(recordPublications),
      recordVideos: Number(recordVideos),
    };
    // validate empty fields
    let validator = fieldIsEmptyValidator([
      { field: record.recordDate, name: 'Data' },
      { field: record.recordTime, name: 'Hora' },
    ]);

    if (validator.hasError)
      return Alert.alert(validator.title, validator.message);

    // validate date
    validator = dateValidator(recordDate);

    if (validator.hasError)
      return Alert.alert(validator.title, validator.message);
    // validate time
    validator = timeValidator(recordTime);

    if (validator.hasError)
      return Alert.alert(validator.title, validator.message);

    await saveDailyRecord(record);
    navigation.navigate('Home');
  }, [
    navigation,
    recordDate,
    recordPublications,
    recordTime,
    recordVideos,
    saveDailyRecord,
  ]);
  return (
    <>
      <View style={[styles.inputGroup, styles.dateTimeGroup]}>
        <View style={styles.dateGroup}>
          <Text style={styles.label}>Data</Text>
          <MaskedInput
            style={[styles.input, { width: '70%' }]}
            type="datetime"
            icon="calendar"
            value={recordDate}
            keyboardType="numeric"
            placeholder="dd/mm/yyyy"
            returnKeyType="done"
            onChangeText={text => setRecordDate(text)}
            options={{ format: 'DD/MM/YYYY' }}
          />
        </View>

        <View style={styles.timeGroup}>
          <Text style={styles.label}>Horas feitas</Text>
          <MaskedInput
            style={styles.input}
            icon="clock"
            type="datetime"
            value={recordTime}
            placeholder="hh:mm"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={text => setRecordTime(text)}
            options={{ format: 'HH:mm' }}
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Publicações</Text>
        <Input
          onChangeText={value =>
            setRecordPublications(value.replace(/[^0-9]/g, ''))
          }
          value={recordPublications}
          icon="book"
          placeholder="Quantidade"
          keyboardType="numeric"
          returnKeyType="done"
        />
      </View>

      <View style={{ marginBottom: metrics.doubleMargin }}>
        <Text style={styles.label}>Vídeos</Text>
        <Input
          onChangeText={value => setRecordVideos(value.replace(/[^0-9]/g, ''))}
          value={recordVideos}
          icon="film"
          placeholder="Quantidade"
          keyboardType="numeric"
          returnKeyType="done"
        />
      </View>

      <View style={styles.inputGroup}>
        <Button title="SALVAR" onPress={handleSaveRecord} />
      </View>
    </>
  );
};

export default NewDaily;
