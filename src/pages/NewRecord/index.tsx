import React, { FC, useState, useCallback } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

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

  const pickerItems = [
    { label: 'Pregação diária', value: 'daily' },
    { label: 'Revisita/Estudo', value: 'other' },
  ];

  const renderRecordType = useCallback(() => {
    if (recordType === 'daily')
      return (
        <>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Horas</Text>
            <MaskedInput
              type="datetime"
              options={{
                format: 'HH:mm',
              }}
              onChangeText={value => setRecordTime(value)}
              value={recordTime}
              icon="clock"
              placeholder="Horas"
              keyboardType="numeric"
              returnKeyType="done"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Publicações</Text>
            <Input
              onChangeText={() => {}}
              icon="book"
              placeholder="Quantidade"
              keyboardType="numeric"
              returnKeyType="done"
            />
          </View>

          <View style={{ marginBottom: metrics.doubleMargin }}>
            <Text style={styles.label}>Vídeos</Text>
            <Input
              onChangeText={() => {}}
              icon="film"
              placeholder="Quantidade"
              keyboardType="numeric"
              returnKeyType="done"
            />
          </View>

          <View style={styles.inputGroup}>
            <Button title="SALVAR" onPress={() => {}} />
          </View>
        </>
      );

    return (
      <>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Morador(a)</Text>
          <Input
            onChangeText={() => {}}
            icon="user"
            placeholder="José da Silva"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Endereço</Text>
          <Input
            onChangeText={() => {}}
            icon="map"
            placeholder="Rua Padre Francisco Carneiro, 123"
          />
        </View>

        <View style={{ marginBottom: metrics.doubleMargin }}>
          <Text style={styles.label}>Telefone ou Celular</Text>
          <Input
            onChangeText={() => {}}
            icon="phone"
            placeholder="(11) 91234-5678"
            keyboardType="numbers-and-punctuation"
            returnKeyType="done"
          />
        </View>

        <View style={styles.inputGroup}>
          <Button
            title="CONTINUAR"
            onPress={() => navigation.navigate('RecordDetails')}
          />
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
