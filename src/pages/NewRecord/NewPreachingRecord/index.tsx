import React, { useState, FC, useCallback, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';
import metrics from '../../../styles/metrics';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { usePreachingRecords } from '../../../hooks/PreachingRecords';
import { fieldIsEmptyValidator } from '../../../utils';

interface NewCallProps {
  navigation: StackNavigationProp<any>;
}

const NewPreachingRecord: FC<NewCallProps> = ({ navigation }) => {
  const [personName, setPersonName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const {
    setCurrentPreachingRecord,
    currentPreachingRecord,
    isEditing,
  } = usePreachingRecords();

  const handleContinue = useCallback(() => {
    const validator = fieldIsEmptyValidator([
      { field: personName, name: 'Nome da pessoa' },
    ]);

    if (validator.hasError) return Alert.alert(validator.title, validator.message);

    const record = {
      id: isEditing ? currentPreachingRecord.id : Date.now(),
      personName,
      address,
      phone,
      publication: isEditing ? currentPreachingRecord.publication : '',
      type: isEditing ? currentPreachingRecord.type : 'Revisita/Estudo',
      calls: isEditing ? currentPreachingRecord.calls : [],
    };

    setCurrentPreachingRecord(record);
    navigation.navigate('RecordDetails');
  }, [
    address,
    currentPreachingRecord.calls,
    currentPreachingRecord.id,
    currentPreachingRecord.publication,
    currentPreachingRecord.type,
    isEditing,
    navigation,
    personName,
    phone,
    setCurrentPreachingRecord,
  ]);

  useEffect(() => {
    if (isEditing) {
      setPersonName(currentPreachingRecord.personName);
      setAddress(currentPreachingRecord.address);
      setPhone(currentPreachingRecord.phone);
    }
  }, [
    currentPreachingRecord.address,
    currentPreachingRecord.personName,
    currentPreachingRecord.phone,
    isEditing,
  ]);

  return (
    <>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nome da pessoa</Text>
        <Input
          onChangeText={value => setPersonName(value)}
          value={personName}
          icon="user"
          placeholder="José da Silva"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Endereço</Text>
        <Input
          onChangeText={value => setAddress(value)}
          value={address}
          icon="map"
          placeholder="Rua Padre Francisco Carneiro, 123"
        />
      </View>

      <View style={{ marginBottom: metrics.doubleMargin }}>
        <Text style={styles.label}>Telefone ou Celular</Text>
        <Input
          onChangeText={value => setPhone(value)}
          value={phone}
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
};

export default NewPreachingRecord;
