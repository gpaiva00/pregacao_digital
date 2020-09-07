import React, { FC } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import { Feather, FontAwesome5 } from '@expo/vector-icons';

import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import colors from '../../styles/colors';
// import Calls from './Calls';

const RecordDetails: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.infoContent}>
          <View style={styles.infoGroup}>
            <Feather style={styles.infoIcon} name="map" size={22} />
            <Text style={styles.infoText}>Rua Cabral de Ataíde, 451</Text>
          </View>

          <View style={styles.infoGroup}>
            <Feather
              style={styles.infoIcon}
              name="phone"
              size={22}
              color={colors.icon}
            />
            <Text style={styles.infoText}>(11) 98563-6857</Text>
          </View>

          <View style={styles.infoGroup}>
            <Feather
              style={styles.infoIcon}
              name="book"
              size={22}
              color={colors.icon}
            />
            <Text style={styles.infoText}>Bíblia Ensina</Text>
          </View>

          <View style={styles.infoGroup}>
            <Feather
              style={styles.infoIcon}
              name="bookmark"
              size={22}
              color={colors.icon}
            />
            <Text style={styles.infoText}>Estudo</Text>
          </View>
        </View>

        <View style={styles.callsHeader}>
          <Text style={styles.callsTitle}>Conversas</Text>
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome5 name="plus-circle" size={25} color={colors.icon} />
          </TouchableOpacity>
        </View>

        {/* <FlatList 
          data={[1,2,3]}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ index, index }) => (
            <View style={styles.item}>

            </View>
          )}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecordDetails;
