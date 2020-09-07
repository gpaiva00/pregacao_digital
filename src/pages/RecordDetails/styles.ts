import { StyleSheet } from 'react-native';
import metrics from '../../styles/metrics';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import general from '../../styles/general';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.margin,
    justifyContent: 'center',
    // paddingBottom: metrics.margin,
  },
  infoContent: {
    marginVertical: metrics.margin,
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
  callsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  callsTitle: {
    ...general.sessionTitle,
  },
});

export default styles;
