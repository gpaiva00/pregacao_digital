import React, { FC, useState } from 'react';

import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../styles/colors';
import MyPicker from '../../components/MyPicker';
// import Input from '../../components/Input';
import Button from '../../components/Button';

const NewCall: FC = () => {
  const [callType, setCallType] = useState('');
  const [callPublication, setCallPublication] = useState('');
  const [callTime, setCallTime] = useState('');
  const [callDate, setCallDate] = useState('');
  const [callComments, setCallComments] = useState('');

  const callTypes = [{ label: '1° Conversa', value: 'firstCall' }];
  const publications = [{ label: 'Bíblia Ensina', value: 'bibliaensina' }];

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
          <MyPicker
            setValueChange={(value, index) => {
              setCallPublication(value);
            }}
            value={callPublication}
            items={publications}
          />
        </View>

        {/* <ScrollView> */}
        <View style={[styles.inputGroup, styles.dateTimeGroup]}>
          <View style={styles.dateGroup}>
            <Text style={styles.label}>Data</Text>
            <Feather name="calendar" size={40} color={colors.primary} />
          </View>

          <View style={styles.timeGroup}>
            <Text style={styles.label}>Hora</Text>
            {/* <Feather name="calendar" size={20} /> */}
            <TextInputMask
              style={styles.input}
              type="datetime"
              value={callTime}
              placeholder="hh:mm"
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

        <View style={styles.inputGroup}>
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
