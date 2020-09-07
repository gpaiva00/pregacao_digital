import React, { FC } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import { FontAwesome5, Feather } from '@expo/vector-icons';
import styles from './styles';
import NoDataView from '../../../components/NoDataView';

const Studies: FC = () => {
  const data = [
    // {
    //   personName: 'Gabriel Souza',
    //   address: 'Rua da capitação, 451',
    //   phone: '(11) 2553-1231',
    //   calls: [1, 2, 3],
    // },
    // {
    //   personName: 'Juvenil Juvencio',
    //   address: 'Rua cabral de ataíde, 123',
    //   phone: '(11) 2553-1231',
    //   calls: [1, 2, 3, 1, 2, 3],
    // },
  ];

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
              <Text style={styles.itemDate}>10/05/2020</Text>
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
