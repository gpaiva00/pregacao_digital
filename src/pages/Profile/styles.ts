import { StyleSheet } from 'react-native';
import general from '../../styles/general';
import metrics from '../../styles/metrics';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: metrics.doubleMargin,
  },
  label: {
    ...general.sessionTitle,
  },
  infoGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.margin,
  },
  infoIcon: {
    color: colors.icon,
    marginRight: metrics.mediumMargin,
  },
  infoText: {
    fontSize: fonts.big,
  },
});

export default styles;
