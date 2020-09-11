import React, { FC, useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import NoDataView from '../../../components/NoDataView';
import { usePreachingRecords } from '../../../hooks/PreachingRecords';
import { IPreachingRecord } from '../../../common/Interfaces';

interface CallsProps {
  navigation: StackNavigationProp<any>;
}

const Calls: FC<CallsProps> = ({ navigation }) => {
  const [data, setData] = useState([] as IPreachingRecord[]);
  const { callsRecords, setCurrentPreachingRecord, setIsEditing } = usePreachingRecords();

  const handleGoToDetails = useCallback(
    (item: IPreachingRecord) => {
      setCurrentPreachingRecord(item);
      setIsEditing(true);
      navigation.navigate('RecordDetails');
    },
    [navigation, setCurrentPreachingRecord, setIsEditing],
  );

  useEffect(() => {
    setData(callsRecords);
  }, [callsRecords]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Revisitas</Text>
      {!data.length && <NoDataView text="Não há revisitas por enquanto." />}
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

export default Calls;
