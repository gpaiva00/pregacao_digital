import React, { FC, useLayoutEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import colors from '../../styles/colors';
import Calls from './Calls';

interface RecordDetailsProps {
  navigation: StackNavigationProp<any>;
}

const RecordDetails: FC<RecordDetailsProps> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {}}>
          <Feather name="edit" size={22} color={colors.icon} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <>
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

          <Calls goToNewCall={() => navigation.navigate('NewCall')} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RecordDetails;
