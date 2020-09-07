import { StyleSheet } from 'react-native';
import metrics from '../../styles/metrics';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.margin,
    justifyContent: 'center',
  },
  infoContent: {
    marginTop: metrics.margin,
  },
  infoGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: metrics.mediumMargin,
  },
  infoIcon: {
    color: colors.icon,
    marginRight: metrics.smallMargin,
  },
  infoText: {
    color: colors.text,
    fontSize: fonts.regular,
  },
});

export default styles;
