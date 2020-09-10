import React, { FC, useLayoutEffect, useState, useEffect, useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';
import { usePreachingRecords } from '../../hooks/PreachingRecords';
import styles from './styles';
import colors from '../../styles/colors';
import Calls from './Calls';

interface RecordDetailsProps {
  navigation: StackNavigationProp<any>;
}

const RecordDetails: FC<RecordDetailsProps> = ({ navigation }) => {
  const {
    isEditing,
    handleSaveRecord,
    currentPreachingRecord: { personName, address, phone, publication, type },
  } = usePreachingRecords();

  const handleSave = useCallback(async () => {
    await handleSaveRecord();
    navigation.navigate('Home');
  }, [handleSaveRecord, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: personName,
      headerRight: () => {
        return isEditing ? (
          <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {}}>
            <Feather name="edit" size={22} color={colors.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={{ marginRight: 10 }} onPress={handleSave}>
            <Feather name="save" size={22} color={colors.icon} />
          </TouchableOpacity>
        );
      },
    });
  }, [handleSave, handleSaveRecord, isEditing, navigation, personName]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContent}>
          <View style={styles.infoGroup}>
            <Feather style={styles.infoIcon} name="map" size={22} />
            <Text style={styles.infoText}>
              {address.length ? address : 'Sem endereço'}
            </Text>
          </View>

          <View style={styles.infoGroup}>
            <Feather style={styles.infoIcon} name="phone" size={22} color={colors.icon} />
            <Text style={styles.infoText}>
              {phone.length ? phone : 'Sem telefone ou celular'}
            </Text>
          </View>

          <View style={styles.infoGroup}>
            <Feather style={styles.infoIcon} name="book" size={22} color={colors.icon} />
            <Text style={styles.infoText}>
              {publication.length ? publication : 'Sem publicação'}
            </Text>
          </View>

          <View style={styles.infoGroup}>
            <Feather
              style={styles.infoIcon}
              name="bookmark"
              size={22}
              color={colors.icon}
            />
            <Text style={styles.infoText}>{type.length ? type : 'Estudo/Revisita'}</Text>
          </View>
        </View>

        <Calls goToNewCall={() => navigation.navigate('NewCall')} />
      </View>
    </>
  );
};

export default RecordDetails;
