import React, { FC, useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { FontAwesome5, Feather } from '@expo/vector-icons';
import { useApp } from '../../../hooks/App';
import styles from './styles';
import NoDataView from '../../../components/NoDataView';
import IDailyPreaching from '../../../common/Interfaces/IDailyPreaching';

const DailyPreaching: FC = () => {
  const [data, setData] = useState([] as IDailyPreaching[]);
  const { dailyRecords } = useApp();

  useEffect(() => {
    setData(dailyRecords);
  }, [dailyRecords]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pregação Diária</Text>
      {!data.length && <NoDataView text="Não há registros por enquanto." />}
      <FlatList
        style={{ padding: 10 }}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>Pregação</Text>
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
              {item.recordPublications > 0 && (
                <View style={styles.itemData}>
                  <Feather style={styles.itemIcon} name="book" size={16} />
                  <Text style={styles.itemText}>
                    {`${item.recordPublications} ${
                      item.recordPublications > 1 ? 'publicações' : 'publicação'
                    }`}
                  </Text>
                </View>
              )}
              {item.recordVideos > 0 && (
                <View style={styles.itemData}>
                  <Feather style={styles.itemIcon} name="film" size={16} />
                  <Text style={styles.itemText}>
                    {`${item.recordVideos} ${
                      item.recordVideos > 1 ? 'vídeos' : 'vídeo'
                    }`}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DailyPreaching;
