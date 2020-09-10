import React, { FC, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { usePreachingRecords } from '../../../hooks/PreachingRecords';

import styles from './styles';
import colors from '../../../styles/colors';
import NoDataView from '../../../components/NoDataView';
import { orderBy } from '../../../utils';
import { ICall } from '../../../common/Interfaces';

interface CallsProps {
  goToNewCall(): void;
}

const Calls: FC<CallsProps> = ({ goToNewCall }) => {
  const [data, setData] = useState([] as ICall[]);
  const { currentPreachingRecord } = usePreachingRecords();

  useEffect(() => {
    const orderedArray = orderBy({
      array: currentPreachingRecord.calls,
      key: 'date',
    });

    setData(orderedArray);
  }, [currentPreachingRecord]);

  return (
    <View style={styles.container}>
      <View style={styles.callsHeader}>
        <Text style={styles.title}>Conversas</Text>
        <TouchableOpacity onPress={goToNewCall}>
          <Feather name="plus-circle" size={27} color={colors.icon} />
        </TouchableOpacity>
      </View>

      {!data.length && <NoDataView text="Crie sua primeira conversa!" />}

      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => (
          <View key={String(index)} style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{item.type}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>

            <View style={styles.itemBody}>
              <View style={styles.itemData}>
                <Feather style={styles.itemIcon} name="clock" size={20} />
                <Text style={styles.itemText}>{item.time}</Text>
              </View>

              <View style={styles.itemData}>
                <Feather style={styles.itemIcon} name="book" size={20} />
                <Text style={styles.itemText}>{item.publication}</Text>
              </View>

              <View style={styles.itemData}>
                <Feather
                  style={styles.itemIcon}
                  name="message-square"
                  size={20}
                />
                <View style={styles.itemDataComments}>
                  <Text style={styles.itemText}>
                    {item.comments.length > 0
                      ? item.comments
                      : 'Sem observações'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Calls;
