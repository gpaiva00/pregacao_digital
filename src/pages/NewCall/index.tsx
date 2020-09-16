import React, { FC, useState, useCallback, useEffect } from 'react';

import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { usePreachingRecords } from '../../hooks/PreachingRecords';
import { fieldIsEmptyValidator, dateValidator, timeValidator } from '../../utils';
import styles from './styles';
import MyPicker from '../../components/MyPicker';
import Input from '../../components/Input';
import Button from '../../components/Button';
import MaskedInput from '../../components/MaskedInput';
import { ICall } from '../../common/Interfaces';

type CallType = '1° Conversa' | '2° Conversa' | '3° Conversa' | 'Estudo Bíblico';

interface NewCallProps {
  navigation: StackNavigationProp<any>;
}

const NewCall: FC<NewCallProps> = ({ navigation }) => {
  const [callType, setCallType] = useState('1° Conversa' as CallType);
  const [callPublication, setCallPublication] = useState('');
  const [callTime, setCallTime] = useState('');
  const [callDate, setCallDate] = useState('');
  const [callComments, setCallComments] = useState('');

  const {
    handleAddCall,
    currentPreachingRecord: { calls },
  } = usePreachingRecords();

  const callTypes = [
    { label: '1° Conversa', value: '1° Conversa' },
    { label: '2° Conversa', value: '2° Conversa' },
    { label: '3° Conversa', value: '3° Conversa' },
    { label: 'Estudo Bíblico', value: 'Estudo Bíblico' },
  ];

  const handleSave = useCallback(() => {
    // empty field validator
    let validator = fieldIsEmptyValidator([
      { field: callPublication, name: 'Publicação' },
      { field: callDate, name: 'Data' },
      { field: callTime, name: 'Hora' },
    ]);

    if (validator.hasError) return Alert.alert(validator.title, validator.message);

    // validate date
    validator = dateValidator(callDate);

    if (validator.hasError) return Alert.alert(validator.title, validator.message);
    // validate time
    validator = timeValidator(callTime);

    if (validator.hasError) return Alert.alert(validator.title, validator.message);

    const call: ICall = {
      id: Date.now(),
      type: callType,
      publication: callPublication,
      date: callDate,
      time: callTime,
      comments: callComments,
    };

    handleAddCall(call);
    navigation.goBack();
  }, [
    callComments,
    callDate,
    callPublication,
    callTime,
    callType,
    handleAddCall,
    navigation,
  ]);

  useEffect(() => {
    if (calls.length) {
      const { publication } = calls[calls.length - 1];

      setCallPublication(publication);
    }
  }, [calls]);

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
              setCallType(value);
            }}
            value={callType}
            items={callTypes}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Publicação</Text>
          <Input
            placeholder="Blíblia Ensina"
            onChangeText={value => setCallPublication(value)}
            value={callPublication}
            icon="book"
          />
        </View>

        {/* <ScrollView> */}
        <View style={[styles.inputGroup, styles.dateTimeGroup]}>
          <View style={styles.dateGroup}>
            <Text style={styles.label}>Data</Text>
            <MaskedInput
              style={[styles.input, { width: '70%' }]}
              type="datetime"
              icon="calendar"
              value={callDate}
              keyboardType="numeric"
              placeholder="dd/mm/yyyy"
              returnKeyType="done"
              onChangeText={text => setCallDate(text)}
              options={{ format: 'DD/MM/YYYY' }}
            />
          </View>

          <View style={styles.timeGroup}>
            <Text style={styles.label}>Hora</Text>
            <MaskedInput
              style={styles.input}
              icon="clock"
              type="datetime"
              value={callTime}
              placeholder="hh:mm"
              keyboardType="numeric"
              returnKeyType="done"
              onChangeText={text => setCallTime(text)}
              options={{ format: 'HH:mm' }}
            />
          </View>
        </View>

        <View style={[styles.inputGroup, { marginBottom: '20%' }]}>
          <Text style={styles.label}>Observações</Text>
          <TextInput
            placeholder="Algumas informações sobre sua conversa"
            style={styles.textarea}
            value={callComments}
            multiline
            numberOfLines={4}
            onChangeText={value => setCallComments(value)}
          />
        </View>
        <Button title="SALVAR" onPress={handleSave} />
        {/* </ScrollView> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewCall;
