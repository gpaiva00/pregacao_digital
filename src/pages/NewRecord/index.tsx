import React, { FC, useState, useCallback, useLayoutEffect, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { usePreachingRecords } from '../../hooks/PreachingRecords';

import styles from './styles';
import NewDaily from './NewDaily';
import NewPreachingRecord from './NewPreachingRecord';
import MyPicker from '../../components/MyPicker';

interface NewRecordProps {
  navigation: StackNavigationProp<any>;
}

const NewRecord: FC<NewRecordProps> = ({ navigation }) => {
  const [recordType, setRecordType] = useState('daily');
  const {
    isEditing,
    currentPreachingRecord: { personName, type },
  } = usePreachingRecords();

  const pickerItems = [
    { label: 'Pregação diária', value: 'daily' },
    { label: 'Revisita/Estudo', value: 'other' },
  ];

  const renderRecordType = useCallback(() => {
    if (recordType === 'daily') return <NewDaily navigation={navigation} />;

    return <NewPreachingRecord navigation={navigation} />;
  }, [recordType, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? `Editar ${type}` : 'Novo Registro',
    });
  }, [isEditing, navigation, type]);

  useEffect(() => {
    if (isEditing) setRecordType('other');
  }, [isEditing]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <View style={styles.container}>
        <View style={styles.inputGroup}>
          {!isEditing && (
            <>
              <Text style={styles.label}>Tipo</Text>
              <MyPicker
                setValueChange={(value, index) => {
                  setRecordType(value);
                }}
                value={recordType}
                items={pickerItems}
              />
            </>
          )}
        </View>
        {renderRecordType()}
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewRecord;
