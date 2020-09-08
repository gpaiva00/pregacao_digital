import React, { FC, useEffect, useState, useCallback } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';

import { FontAwesome5, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDailyRecords } from '../../../hooks/DailyRecords';
import styles from './styles';
import NoDataView from '../../../components/NoDataView';
import { IDailyPreaching } from '../../../common/Interfaces';
import { orderBy } from '../../../utils';

const DailyPreaching: FC = () => {
  const [data, setData] = useState([] as IDailyPreaching[]);
  const { dailyRecords, removeDailyRecord } = useDailyRecords();

  const handleRemoveItem = useCallback(
    (id: number) => {
      Alert.alert('Excluir registro?', 'Isso não será desfeito!', [
        {
          text: 'Cancelar',
        },
        {
          text: 'Excluir',
          onPress: () => removeDailyRecord(id),
        },
      ]);
    },
    [removeDailyRecord],
  );

  useEffect(() => {
    const orderedArray = orderBy({ array: dailyRecords, key: 'recordDate' });
    setData(orderedArray);
  }, [dailyRecords]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pregação diária</Text>
      {!data.length && <NoDataView text="Não há registros por enquanto." />}
      <FlatList
        style={{ padding: 10 }}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onLongPress={() => handleRemoveItem(item.id)}
          >
            <View style={styles.itemHeader}>
              {/* <Text style={styles.itemTitle}>Pregação</Text> */}
              <Text style={styles.itemDate}>{item.recordDate}</Text>
            </View>
            <View style={styles.itemBody}>
              <View style={styles.itemData}>
                <Feather style={styles.itemIcon} name="clock" size={16} />
                <Text style={styles.itemText}>{item.recordTime}</Text>
              </View>
              {item.recordCalls > 0 && (
                <View style={styles.itemData}>
                  <Feather style={styles.itemIcon} name="users" size={16} />
                  <Text style={styles.itemText}>
                    {`${item.recordCalls} ${
                      item.recordCalls > 1 ? 'revisitas' : 'revisita'
                    }`}
                  </Text>
                </View>
              )}
              {item.recordStudies > 0 && (
                <View style={styles.itemData}>
                  <FontAwesome5 style={styles.itemIcon} name="gem" size={16} />
                  <Text style={styles.itemText}>
                    {`${item.recordStudies} ${
                      item.recordStudies > 1 ? 'estudos' : 'estudo'
                    }`}
                  </Text>
                </View>
              )}
              <View style={styles.itemData}>
                <Feather style={styles.itemIcon} name="book" size={16} />
                <Text style={styles.itemText}>
                  {`${item.recordPublications} ${
                    item.recordPublications > 1 || item.recordPublications === 0
                      ? 'publicações'
                      : 'publicação'
                  }`}
                </Text>
              </View>
              <View style={styles.itemData}>
                <Feather style={styles.itemIcon} name="film" size={16} />
                <Text style={styles.itemText}>
                  {`${item.recordVideos} ${
                    item.recordVideos > 1 || item.recordVideos === 0
                      ? 'vídeos'
                      : 'vídeo'
                  }`}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DailyPreaching;
