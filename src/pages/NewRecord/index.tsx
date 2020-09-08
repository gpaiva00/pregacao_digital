import React, { FC, useState, useCallback } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';
import NewDaily from './NewDaily';
import NewPreachingRecord from './NewPreachingRecord';
import MyPicker from '../../components/MyPicker';

interface NewRecordProps {
  navigation: StackNavigationProp<any>;
}

const NewRecord: FC<NewRecordProps> = ({ navigation }) => {
  const [recordType, setRecordType] = useState('daily');

  const pickerItems = [
    { label: 'Pregação diária', value: 'daily' },
    { label: 'Revisita/Estudo', value: 'other' },
  ];

  const renderRecordType = useCallback(() => {
    if (recordType === 'daily') return <NewDaily navigation={navigation} />;

    return <NewPreachingRecord navigation={navigation} />;
  }, [recordType, navigation]);

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
