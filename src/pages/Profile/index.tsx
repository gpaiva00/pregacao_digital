import React, { FC } from 'react';
import { View, Text } from 'react-native';

import { Feather, FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

const Profile: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Relatório de Agosto</Text>

      <View>
        <View style={styles.infoGroup}>
          <Feather style={styles.infoIcon} name="clock" size={25} />
          <Text style={styles.infoText}>10h:15min</Text>
        </View>

        <View style={styles.infoGroup}>
          <Feather style={styles.infoIcon} name="book" size={25} />
          <Text style={styles.infoText}>1 publicação</Text>
        </View>

        <View style={styles.infoGroup}>
          <FontAwesome5 style={styles.infoIcon} name="gem" size={22} />
          <Text style={styles.infoText}>4 estudos</Text>
        </View>

        <View style={styles.infoGroup}>
          <Feather style={styles.infoIcon} name="users" size={25} />
          <Text style={styles.infoText}>4 revistas</Text>
        </View>

        <View style={styles.infoGroup}>
          <Feather style={styles.infoIcon} name="film" size={25} />
          <Text style={styles.infoText}>4 vídeos</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
