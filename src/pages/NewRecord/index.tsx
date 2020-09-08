import React, { FC, useState, useCallback } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  fieldIsEmptyValidator,
  timeValidator,
  dateValidator,
} from '../../utils';
import { useApp } from '../../hooks/App';

import styles from './styles';
import metrics from '../../styles/metrics';
import Input from '../../components/Input';
import Button from '../../components/Button';
import MyPicker from '../../components/MyPicker';
import MaskedInput from '../../components/MaskedInput';

interface navigation {
  navigation: StackNavigationProp<any>;
}

const NewRecord: FC<navigation> = ({ navigation }) => {
  const [recordType, setRecordType] = useState('daily');
  const [recordTime, setRecordTime] = useState('');
  const [recordDate, setRecordDate] = useState('');
  const [recordPublications, setRecordPublications] = useState('');
  const [recordVideos, setRecordVideos] = useState('');

  const [callPersonName, setCallPersonName] = useState('');
  const [callAddress, setCallAddress] = useState('');
  const [callPhone, setCallPhone] = useState('');

  const { saveDailyRecord } = useApp();

  const pickerItems = [
    { label: 'Pregação diária', value: 'daily' },
    { label: 'Revisita/Estudo', value: 'other' },
  ];

  const handleSaveRecord = useCallback(async () => {
    const record = {
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

  const handleContinue = useCallback(() => {
    // navigation.navigate('RecordDetails');
  }, []);

  const renderRecordType = useCallback(() => {
    if (recordType === 'daily')
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
                setRecordPublications(value.replace(/[^0-9]/g, ''))}
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
              onChangeText={value =>
                setRecordVideos(value.replace(/[^0-9]/g, ''))}
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

    return (
      <>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome da pessoa</Text>
          <Input
            onChangeText={value => setCallPersonName(value)}
            value={callPersonName}
            icon="user"
            placeholder="José da Silva"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Endereço</Text>
          <Input
            onChangeText={value => setCallAddress(value)}
            value={callAddress}
            icon="map"
            placeholder="Rua Padre Francisco Carneiro, 123"
          />
        </View>

        <View style={{ marginBottom: metrics.doubleMargin }}>
          <Text style={styles.label}>Telefone ou Celular</Text>
          <Input
            onChangeText={value => setCallPhone(value)}
            value={callPhone}
            icon="phone"
            placeholder="(11) 91234-5678"
            keyboardType="numbers-and-punctuation"
            returnKeyType="done"
          />
        </View>

        <View style={styles.inputGroup}>
          <Button title="CONTINUAR" onPress={handleContinue} />
        </View>
      </>
    );
  }, [recordType, pickerItems]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <View style={styles.container}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tipo</Text>
          <MyPicker
            setValueChange={(value, index) => {
              setRecordType(value);
            }}
            value={recordType}
            items={pickerItems}
          />
        </View>
        {renderRecordType()}
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewRecord;
