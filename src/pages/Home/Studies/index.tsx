import React, { FC, useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { usePreachingRecords } from '../../../hooks/PreachingRecords';

import styles from './styles';
import NoDataView from '../../../components/NoDataView';
import { IPreachingRecord } from '../../../common/Interfaces';

const Studies: FC = () => {
  const [data, setData] = useState([] as IPreachingRecord[]);
  const { studiesRecords } = usePreachingRecords();

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
              {item.address !== '' && (
                <View style={styles.itemData}>
                  <Feather style={styles.itemIcon} name="map-pin" size={16} />
                  <Text style={styles.itemText}>{item.address}</Text>
                </View>
              )}
              {item.phone !== '' && (
                <View style={styles.itemData}>
                  <Feather style={styles.itemIcon} name="phone" size={16} />
                  <Text style={styles.itemText}>{item.phone}</Text>
                </View>
              )}
            </View>
            <View style={styles.itemFooter}>
              <Text style={styles.itemText}>
                {`${item.calls.length} ${
                  item.calls.length > 1 ? 'conversas' : 'conversa'
                }`}
              </Text>
              <TouchableOpacity onPress={() => {}} style={styles.itemButton}>
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
