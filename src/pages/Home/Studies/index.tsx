import React, { FC, useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { usePreachingRecords } from '../../../hooks/PreachingRecords';

import styles from './styles';
import NoDataView from '../../../components/NoDataView';
import { IPreachingRecord } from '../../../common/Interfaces';

interface StudiesProps {
  navigation: StackNavigationProp<any>;
}

const Studies: FC<StudiesProps> = ({ navigation }) => {
  const [data, setData] = useState([] as IPreachingRecord[]);
  const {
    studiesRecords,
    setCurrentPreachingRecord,
    setIsEditing,
  } = usePreachingRecords();

  const handleGoToDetails = useCallback(
    (item: IPreachingRecord) => {
      setCurrentPreachingRecord(item);
      setIsEditing(true);
      navigation.navigate('RecordDetails');
    },
    [navigation, setCurrentPreachingRecord, setIsEditing],
  );

  useEffect(() => {
    // const orderedArray = orderBy({ array: callsRecords, key: 'recordDate' });
    setData(studiesRecords);
  }, [studiesRecords]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estudos</Text>
      {!data.length && <NoDataView text="Não há estudos por enquanto." />}
      <FlatList
        style={{ padding: 10 }}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{item.personName}</Text>
              {/* <Text style={styles.itemDate}>10/05/2020</Text> */}
            </View>
            <View style={styles.itemBody}>
              <View style={styles.itemData}>
                <Feather style={styles.itemIcon} name="map-pin" size={16} />
                <Text style={styles.itemText}>
                  {item.address !== '' ? item.address : 'Sem endereço'}
                </Text>
              </View>
              <View style={styles.itemData}>
                <Feather style={styles.itemIcon} name="phone" size={16} />
                <Text style={styles.itemText}>
                  {item.phone !== '' ? item.phone : 'Sem telefone'}
                </Text>
              </View>
            </View>
            <View style={styles.itemFooter}>
              <Text style={styles.itemText}>
                {`${item.calls.length} ${
                  item.calls.length > 1 ? 'conversas' : 'conversa'
                }`}
              </Text>
              <TouchableOpacity
                onPress={() => handleGoToDetails(item)}
                style={styles.itemButton}
              >
                <Text style={styles.itemButtonText}>Ver mais</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Studies;
