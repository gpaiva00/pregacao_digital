import React, { FC } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import { FontAwesome5, Feather } from '@expo/vector-icons';
import styles from './styles';

const DailyPreaching: FC = () => {
  const data = [
    { time: '1h', calls: 0, videos: 0, publications: 1, studies: 0 },
    { time: '4h:15min', calls: 4, videos: 0, publications: 5, studies: 0 },
    { time: '5h', calls: 4, videos: 1, publications: 5, studies: 1 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pregação Diária</Text>
      <FlatList
        style={{ padding: 10 }}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>Pregação</Text>
              <Text style={styles.itemDate}>10/05/2020</Text>
            </View>
            <View style={styles.itemBody}>
              <View style={styles.itemData}>
                <Feather style={styles.itemIcon} name="clock" size={16} />
                <Text style={styles.itemText}>{item.time}</Text>
              </View>
              {item.calls > 0 && (
                <View style={styles.itemData}>
                  <Feather style={styles.itemIcon} name="users" size={16} />
                  <Text style={styles.itemText}>
                    {`${item.calls} ${
                      item.calls > 1 ? 'revisitas' : 'revisita'
                    }`}
                  </Text>
                </View>
              )}
              {item.studies > 0 && (
                <View style={styles.itemData}>
                  <FontAwesome5 style={styles.itemIcon} name="gem" size={16} />
                  <Text style={styles.itemText}>
                    {`${item.studies} ${
                      item.studies > 1 ? 'estudos' : 'estudo'
                    }`}
                  </Text>
                </View>
              )}
              {item.publications > 0 && (
                <View style={styles.itemData}>
                  <Feather style={styles.itemIcon} name="book" size={16} />
                  <Text style={styles.itemText}>
                    {`${item.publications} ${
                      item.publications > 1 ? 'publicações' : 'publicação'
                    }`}
                  </Text>
                </View>
              )}
              {item.videos > 0 && (
                <View style={styles.itemData}>
                  <Feather style={styles.itemIcon} name="film" size={16} />
                  <Text style={styles.itemText}>
                    {`${item.videos} ${item.videos > 1 ? 'vídeos' : 'vídeo'}`}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.itemFooter}>
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

export default DailyPreaching;
