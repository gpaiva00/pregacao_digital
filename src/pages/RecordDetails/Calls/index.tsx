import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Feather, FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../../styles/colors';
import NoDataView from '../../../components/NoDataView';

interface CallsProps {
  goToNewCall(): void;
}

const Calls: FC<CallsProps> = ({ goToNewCall }) => {
  const data = [];

  return (
    <View style={styles.container}>
      <View style={styles.callsHeader}>
        <Text style={styles.title}>Conversas</Text>
        <TouchableOpacity onPress={goToNewCall}>
          <FontAwesome5 name="plus-circle" size={25} color={colors.icon} />
        </TouchableOpacity>
      </View>

      {!data.length && <NoDataView text="Crie sua primeira conversa!" />}

      {data.map((item, index) => (
        <View key={String(index)} style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>{item.type}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
          </View>

          <View style={styles.itemBody}>
            <View style={styles.itemData}>
              <Feather style={styles.itemIcon} name="clock" size={18} />
              <Text style={styles.itemText}>{item.time}</Text>
            </View>

            <View style={styles.itemData}>
              <Feather style={styles.itemIcon} name="book" size={18} />
              <Text style={styles.itemText}>{item.publication}</Text>
            </View>

            {item.comments && (
              <View style={styles.itemData}>
                <Feather
                  style={styles.itemIcon}
                  name="message-square"
                  size={18}
                />
                <View style={styles.itemDataComments}>
                  <Text style={styles.itemText}>{item.comments}</Text>
                </View>
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default Calls;
