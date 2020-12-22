import React, { FC } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import FullscreenLoading from '../../FullscreenLoading';
import Button from '../../Button';

import { GenericTemplateProps } from './typings';

import styles from './styles';

const GenericTemplate: FC<GenericTemplateProps> = ({
  children,
  buttonTitle,
  buttonPress,
  loading,
}) => {
  return (
    <>
      {loading ? (
        <FullscreenLoading />
      ) : (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.fullHeightScrollView}>
            <View style={styles.content}>
              <View style={styles.fullscreenChildren}>{children}</View>
              {buttonTitle && <Button onPress={buttonPress} title={buttonTitle} />}
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default GenericTemplate;
