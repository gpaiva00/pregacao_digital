import { StyleSheet } from 'react-native';
import metrics from '../../../styles/metrics';
import general from '../../../styles/general';

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: metrics.margin,
  },
  label: {
    ...general.label,
  },
  dateTimeGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateGroup: {
    flex: 2,
  },
  timeGroup: {
    flex: 1,
  },
  input: {},
});

export default styles;
