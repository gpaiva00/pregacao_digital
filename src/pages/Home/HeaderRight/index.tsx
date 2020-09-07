import React, { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { FontAwesome5, Feather } from '@expo/vector-icons';
import colors from '../../../styles/colors';
import styles from './styles';

interface HeaderRightProps {
  handleGoToProfile(): void;
  handleGoToNewRegister(): void;
}

const HeaderRight: FC<HeaderRightProps> = ({
  handleGoToNewRegister,
  handleGoToProfile,
}) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity style={{ marginRight: 15 }} onPress={handleGoToProfile}>
        <Feather name="bar-chart" size={22} color={colors.icon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginRight: 15 }}
        onPress={handleGoToNewRegister}
      >
        <Feather name="plus-circle" size={25} color={colors.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
