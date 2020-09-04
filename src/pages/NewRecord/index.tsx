import React, { FC, useState, useCallback } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';

import styles from './styles';
import Input from '../../components/Input';

const NewRecord: FC = () => {
  const [recordType, setRecordType] = useState('other');

  const renderRecordType = useCallback(() => {
    if (recordType === 'daily')
      return (
        <>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Horas</Text>
            <Input
              onChangeText={() => {}}
              icon="clock"
              placeholder="Horas"
              keyboardType="numbers-and-punctuation"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Publicações</Text>
            <Input
              onChangeText={() => {}}
              icon="book"
              placeholder="Quantidade"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Vídeos</Text>
            <Input
              onChangeText={() => {}}
              icon="film"
              placeholder="Quantidade"
              keyboardType="numeric"
            />
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

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Telefone ou Celular</Text>
          <Input
            onChangeText={() => {}}
            icon="phone"
            placeholder="(11) 91234-5678"
            keyboardType="numbers-and-punctuation"
          />
        </View>
      </>
    );
  }, [recordType]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      {renderRecordType()}
    </KeyboardAvoidingView>
  );
};

export default NewRecord;
