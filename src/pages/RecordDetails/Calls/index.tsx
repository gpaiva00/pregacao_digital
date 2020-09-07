import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Feather, FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../../styles/colors';

interface CallsProps {
  goToNewCall(): void;
}

const Calls: FC<CallsProps> = ({ goToNewCall }) => {
  const data = [
    {
      type: '1° Conversa',
      time: '10:30',
      date: '01/09/2020',
      publication: 'Bíblia Ensina',
      comments: 'Falamos sobre o fim do sofrimento. Li o texto de Apo. 21:3,4',
    },
    {
      type: '2° Conversa',
      time: '10:30',
      date: '02/09/2020',
      publication: 'Bíblia Ensina',
      comments:
        'Respondi o que Deus vai fazer no futuro. Li o texto Sal. 37:29',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.callsHeader}>
        <Text style={styles.title}>Conversas</Text>
        <TouchableOpacity onPress={goToNewCall}>
          <FontAwesome5 name="plus-circle" size={25} color={colors.icon} />
        </TouchableOpacity>
      </View>

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
