import React, { FC, useState } from 'react';

import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import styles from './styles';
import MyPicker from '../../components/MyPicker';
import Input from '../../components/Input';
import Button from '../../components/Button';
import MaskedInput from '../../components/MaskedInput';

const NewCall: FC = () => {
  const [callType, setCallType] = useState('');
  const [callPublication, setCallPublication] = useState('');
  const [callTime, setCallTime] = useState('');
  const [callDate, setCallDate] = useState('');
  const [callComments, setCallComments] = useState('');

  const callTypes = [{ label: '1° Conversa', value: 'firstCall' }];

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
              onChangeText={text => {
                setCallDate(text);
              }}
              options={{
                format: 'DD/MM/YYYY',
              }}
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
              onChangeText={text => {
                setCallTime(text);
              }}
              options={{
                format: 'HH:mm',
              }}
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
        <Button title="SALVAR" onPress={() => {}} />
        {/* </ScrollView> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewCall;
